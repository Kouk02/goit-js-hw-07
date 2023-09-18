import { galleryItems } from './gallery-items.js';
const gallery = document.querySelector('.gallery');
function createGalleryMarkup(items) {
    return items
        .map(({ original, preview, description }) => `
            <li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}">
                </a>
            </li>
        `)
        .join('');
}

gallery.innerHTML = createGalleryMarkup(galleryItems);
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250, 
});

gallery.addEventListener('click', (event) => {
    event.preventDefault(); 
    if (event.target.nodeName === 'IMG') { 
        lightbox.open();
    }
});
