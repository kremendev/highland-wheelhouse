const galleryTile = document.querySelector('.open-gallery');

if (galleryTile && window.Lightbox3) {
   galleryTile.addEventListener('click', (event) => {
      event.preventDefault();
      Lightbox3.Lightbox.instance.open('trails', 0);
   });
}
