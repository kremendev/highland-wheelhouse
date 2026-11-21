const hirePrices = {
   'Adult hardtail MTB': { '4 hours': 20, 'Full day': 30 },
   'Adult road bike': { '4 hours': 18, 'Full day': 25 },
   'Junior hardtail': { '4 hours': 18, 'Full day': 25 },
};

const bikeButtons = document.querySelectorAll('.choose-bike-form button');
const timeButtons = document.querySelectorAll('.time-buttons button');
const priceText = document.querySelector('.bikeNtime-container h2');
const priceDescription = document.querySelector('.bikeNtime-container p');
const reserveButton = document.querySelector(
   '.hire-form-container .button-main',
);
const messageField = document.querySelector('.contact-form textarea');

function updatePrice() {
   const bike = document
      .querySelector('.choose-bike-form .active')
      .textContent.trim();
   const time = document
      .querySelector('.time-buttons .active')
      .textContent.trim();
   const timeText = time === 'Full day' ? 'a full day' : '4 hours';

   priceText.textContent = '£' + hirePrices[bike][time];
   priceDescription.textContent =
      bike + ' for ' + timeText + '. Collect from 09:30, back by 5pm.';
}

function selectButton(buttons, clickedButton) {
   buttons.forEach((button) => button.classList.remove('active'));
   clickedButton.classList.add('active');
   updatePrice();
}

if (priceText && priceDescription) {
   bikeButtons.forEach((button) => {
      button.addEventListener('click', () => selectButton(bikeButtons, button));
   });

   timeButtons.forEach((button) => {
      button.addEventListener('click', () => selectButton(timeButtons, button));
   });
}

if (reserveButton && messageField) {
   reserveButton.addEventListener('click', () => {
      messageField.value =
         'Hi, I would like to reserve: ' +
         priceDescription.textContent +
         ' Price: ' +
         priceText.textContent;
   });
}
