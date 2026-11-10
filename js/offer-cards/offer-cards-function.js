const gbp = new Intl.NumberFormat('en-GB', {
   style: 'currency',
   currency: 'GBP',
});

function createCard(bike) {
   const card = document.createElement('div');
   card.className = 'card';

   const photo = document.createElement('div');
   photo.className = 'card-photo';

   const img = document.createElement('img');
   img.src = bike.image;
   img.alt = bike.name;

   const title = document.createElement('h3');
   title.className = 'card-title';
   title.textContent = bike.name;

   const type = document.createElement('p');
   type.className = 'bike-type';
   type.textContent = bike.type;

   const desc = document.createElement('p');
   desc.className = 'card-description';
   desc.textContent = bike.description;

   const price = document.createElement('span');
   price.className = 'bike-price';
   price.textContent = gbp.format(bike.price);

   // TODO Create open links for each bike
   const link = document.createElement('a');
   link.className = 'bike-link';
   link.textContent = 'View bike';
   link.href = '#';

   photo.append(img, price);
   card.append(photo, type, title, desc, link);
   return card;
}

const list = document.querySelector('.bikes-row');
list.append(...bikes.map(createCard));
