import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a');
const loader = document.getElementById('loader');

export function createGallery(images) {
    const markup = images.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
    return `<li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      data-source="${largeImageURL}"
      alt="${tags}"
    />
  </a>
  <div class="quantitative-data">
      <div class="stats-info">
        <h2 class="stats-title">Likes</h2>
        <p class="stats-num">${likes}</p>
      </div>
      <div class="stats-info">
        <h2 class="stats-title">Views</h2>
        <p class="stats-num">${views}</p>
      </div>
      <div class="stats-info">
        <h2 class="stats-title">Comments</h2>
        <p class="stats-num">${comments}</p>
      </div>
      <div class="stats-info">
        <h2 class="stats-title">Downloads</h2>
        <p class="stats-num">${downloads}</p>
      </div>
  </div>
</li>`
}).join('');
gallery.insertAdjacentHTML("beforeend", markup);
lightbox.refresh();
};

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}


