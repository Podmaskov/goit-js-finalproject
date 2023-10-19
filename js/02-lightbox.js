import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryWrap = document.querySelector('.gallery');

let galleryItemsTemplate = '';

galleryItems.forEach(({ original, preview, description }) => {
  return (galleryItemsTemplate += `
  <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>
    `);
});

galleryWrap.insertAdjacentHTML('afterbegin', galleryItemsTemplate);

new SimpleLightbox('.gallery a', {
  captionSelector: 'img',
  captionsData: 'alt',
  captionDelay: 250,
});
