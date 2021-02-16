import imagesTpl from '../templates/images.hbs';
import refs from '../js/refs';

function updateGalleryMarkup(hits) {
  const markup = imagesTpl(hits);
  refs.galleryContainer.insertAdjacentHTML('beforeend', markup);
}

export default updateGalleryMarkup;
