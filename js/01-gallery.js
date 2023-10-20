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

const createModalTemplate = (src, alt) => `
    <img src="${src}" alt="${alt}" width="800" height="600">
`;

function handlerCloseOnEsc(event) {
  if (event.key === 'Escape') {
    this.close();
  }
}

const createLightbox = (imgSrc, imgAlt) => {
  const lightboxOptions = {
    onClose() {
      document.removeEventListener('keydown', handlerCloseOnEscWithCtx);
    },
    onShow() {
      document.addEventListener('keydown', handlerCloseOnEscWithCtx);
    },
  };
  const lightbox = basicLightbox.create(
    createModalTemplate(imgSrc, imgAlt),
    lightboxOptions
  );
  const handlerCloseOnEscWithCtx = handlerCloseOnEsc.bind(lightbox);

  return lightbox;
};

galleryWrap.addEventListener('click', event => {
  event.preventDefault();
  const imgSrc = event.target.dataset.source;
  const imgAlt = event.target.alt;

  const lightbox = createLightbox(imgSrc, imgAlt);

  lightbox.show();
});
