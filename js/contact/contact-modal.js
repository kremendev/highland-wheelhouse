const contactModal = document.querySelector('.contact-modal');
const contactForm = document.querySelector('.contact-form');
const closeButton = document.querySelector('.contact-close');
const contactLinks = document.querySelectorAll('.open-contact');

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\+?[0-9 ]{10,}$/;

function checkField(field, isValid, message) {
   const error = field.parentElement.querySelector('.error');

   if (isValid) {
      error.textContent = '';
      field.classList.remove('invalid');
   } else {
      error.textContent = message;
      field.classList.add('invalid');
   }

   return isValid;
}

function validateForm() {
   const name = contactForm.elements.name;
   const phone = contactForm.elements.phone;
   const email = contactForm.elements.email;
   const message = contactForm.elements.message;

   const nameOk = checkField(
      name,
      name.value.trim().length >= 2,
      'Please enter your name.',
   );
   const phoneOk = checkField(
      phone,
      phone.value.trim() === '' || phonePattern.test(phone.value.trim()),
      'Please enter a valid phone number.',
   );
   const emailOk = checkField(
      email,
      emailPattern.test(email.value.trim()),
      'Please enter a valid email address.',
   );
   const messageOk = checkField(
      message,
      message.value.trim().length >= 10,
      'Please write at least 10 characters.',
   );

   return nameOk && phoneOk && emailOk && messageOk;
}

function clearErrors() {
   contactForm.querySelectorAll('.error').forEach((error) => {
      error.textContent = '';
   });
   contactForm.querySelectorAll('.invalid').forEach((field) => {
      field.classList.remove('invalid');
   });
}

if (contactModal && contactForm && closeButton) {
   contactLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
         event.preventDefault();
         clearErrors();
         contactModal.showModal();
      });
   });

   closeButton.addEventListener('click', () => {
      contactModal.close();
   });

   contactForm.addEventListener('submit', (event) => {
      if (!validateForm()) {
         event.preventDefault();
         contactForm.querySelector('.invalid').focus();
         return;
      }

      alert('Thank you! We will get back to you soon.');
      contactForm.reset();
   });
}
