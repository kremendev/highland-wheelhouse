const row = document.querySelector('.bikes-row');
const prevButton = document.querySelector('.slide-arrow-prev');
const nextButton = document.querySelector('.slide-arrow-next');

function getStep() {
   const card = row.querySelector('.card');
   const gap = parseFloat(getComputedStyle(row).columnGap) || 0;
   return card ? card.offsetWidth + gap : 0;
}

function updateArrows() {
   prevButton.disabled = row.scrollLeft <= 0;
   nextButton.disabled = row.scrollLeft + row.clientWidth >= row.scrollWidth - 1;
}

if (row && prevButton && nextButton) {
   prevButton.addEventListener('click', () => {
      row.scrollBy({ left: -getStep(), behavior: 'smooth' });
   });

   nextButton.addEventListener('click', () => {
      row.scrollBy({ left: getStep(), behavior: 'smooth' });
   });

   row.addEventListener('scroll', updateArrows);
   window.addEventListener('resize', updateArrows);
   updateArrows();
}
