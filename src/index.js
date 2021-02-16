import './styles.css';

import apiService from './js/api-service';
import updateGalleryMarkup from './js/update-gallery-markup';
import refs from './js/refs';

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.currentTarget;
  apiService.query = form.elements.query.value;

  refs.galleryContainer.innerHTML = '';
  form.reset();

  apiService.resetPage();

  refs.loadMoreBtn.classList.add('is-hidden');

  apiService.apiService().then(hits => {
    updateGalleryMarkup(hits);
    refs.loadMoreBtn.classList.remove('is-hidden');

    window.scrollTo({
      top: 100,
      behavior: 'smooth',
    });
  });
});

refs.loadMoreBtn.addEventListener('click', () => {
  apiService.apiService().then(hits => {
    updateGalleryMarkup(hits);
  });
});
