const apiKey = '20282142-3926486b0d0a2f754919f4d11';

export default {
  searchQuery: '',
  page: 1,
  apiService() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${apiKey}`;

    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    };

    return fetch(url, options)
      .then(response => response.json())
      .then(({ hits }) => {
        this.page += 1;
        return hits;
      });
  },
  resetPage() {
    this.page = 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};
