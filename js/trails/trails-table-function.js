function createTrail(trail) {
   const item = document.createElement('li');

   const details = document.createElement('details');
   details.className = 'trail';
   details.setAttribute('name', 'trails');
   details.open = trail.open;

   const head = document.createElement('summary');
   head.className = 'trail-head';

   const dot = document.createElement('span');
   dot.className = 'trail-dot';
   if (trail.color) {
      dot.style.background = trail.color;
   } else {
      dot.classList.add('trail-dot--outline');
   }
   dot.setAttribute('aria-hidden', true);

   const name = document.createElement('span');
   name.className = 'trail-name';
   name.textContent = trail.name;

   const type = document.createElement('span');
   type.className = 'trail-type';
   type.textContent = trail.type;

   const body = document.createElement('div');
   body.className = 'trail-body';

   const desc = document.createElement('p');
   desc.className = 'trail-description';
   desc.textContent = trail.description;

   const skill = document.createElement('p');
   skill.className = 'trail-skill';
   skill.textContent = trail.skill;

   const bikeType = document.createElement('p');
   bikeType.className = 'bike-type';
   bikeType.textContent = trail.bikeType;

   const link = document.createElement('a');
   link.className = 'trail-link';
   link.textContent = 'Hire a bike for it';
   link.href = '#hire';

   head.append(dot, name, type);
   body.append(desc, skill, bikeType, link);
   details.append(head, body);
   item.append(details);
   return item;
}

const table = document.querySelector('.trail-list');
table.append(...trails.map(createTrail));
