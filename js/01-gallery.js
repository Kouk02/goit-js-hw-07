import { galleryItems } from './gallery-items.js';
const gallery = document.querySelector('.gallery');
let currentLightbox; // Оголошуємо змінну на більш вищому рівні

function createGalleryMarkup(items) {
  return items
    .map(
      ({ original, preview, description }) =>
        `<li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>`
    )
    .join('');
}
gallery.innerHTML = createGalleryMarkup(galleryItems);
gallery.addEventListener('click', (event) => { 
  event.preventDefault(); 
  if (event.target.nodeName === 'IMG') { 
    const largeImageURL = event.target.dataset.source; 
    const lightbox = basicLightbox.create(  
      `<img src="${largeImageURL}" alt="${event.target.alt}" />`,
      {
        onShow: (instance) => {
          document.addEventListener('keydown', handleKeyDown);
          currentLightbox = instance; // Зберігаємо посилання на поточний екземпляр модального вікна
        },
        onClose: (instance) => {
          document.removeEventListener('keydown', handleKeyDown);
        },
      }
    );

    lightbox.show();
  }
});
function handleKeyDown(event) {
  if (event.key === 'Escape' && currentLightbox) {
    currentLightbox.close(); 
  }
}
  if (event.key === 'Escape') {
    currentLightbox.close(); 
  }
