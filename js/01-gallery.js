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
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
    `);
});

galleryWrap.insertAdjacentHTML('afterbegin', galleryItemsTemplate);

const handlerCloseOnEsc = basicLightboxInstance =>
  function onKeydown(event) {
    if (event.key === 'Escape') {
      basicLightboxInstance.close(() => {
        document.removeEventListener('keydown', onKeydown);
      });
    }
  };

galleryWrap.addEventListener('click', event => {
  event.preventDefault();
  const basicLightboxInstance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" alt="${event.target.alt}" width="800" height="600">
`);

  basicLightboxInstance.show(() => {
    document.addEventListener(
      'keydown',
      handlerCloseOnEsc(basicLightboxInstance)
    );
  });
});
