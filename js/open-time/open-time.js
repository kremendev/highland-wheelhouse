const openBadge = document.querySelector('.open-now');
const openRows = document.querySelectorAll('.open-times tr');
const openTodayText = document.querySelector('.hero-strip li');

function updateOpenTime() {
   const now = new Date();
   const day = now.getDay();
   const minutes = now.getHours() * 60 + now.getMinutes();
   const isWeekend = day === 0 || day === 6;
   const openFrom = isWeekend ? 9 * 60 : 9 * 60 + 30;
   const openTo = 18 * 60;

   if (minutes >= openFrom && minutes < openTo) {
      openBadge.textContent = 'Open now';
      openBadge.classList.remove('closed');
   } else {
      openBadge.textContent = 'Closed now';
      openBadge.classList.add('closed');
   }

   openRows[0].classList.toggle('today', !isWeekend);
   openRows[1].classList.toggle('today', isWeekend);

   if (isWeekend) {
      openTodayText.textContent = 'Open today 09:00 – 18:00';
   } else {
      openTodayText.textContent = 'Open today 09:30 – 18:00';
   }
}

if (openBadge && openRows.length === 2 && openTodayText) {
   updateOpenTime();
   setInterval(updateOpenTime, 60000);
}
