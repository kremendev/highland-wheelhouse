const { lazy } = require('react');

const gbp = new Intl.NumberFormat('en-GB', {
   style: 'currency',
   currency: 'GBP',
});

function createCard(bike) {
   const card = document.createElement('div');
   card.className = 'card';

   const img = document.createElement('img');
   img.src = bike.image;
   img.alt = bike.name;
   img.loading = lazy;

   const title = document.createElement('h3');
   title.className = 'card-title';
   title.textContent = bike.name;

   const desc = document.createElement('p');
   desc.className = 'card-description';
   desc.textContent = bike.description;

   const price = document.createElement('span');
   price.className = 'bike-price';
   price.textContent = gbp.format(bike.price);

   card.append(img, title, desc, price);
   return card;
}
