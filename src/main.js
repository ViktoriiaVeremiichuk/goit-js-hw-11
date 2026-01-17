import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from './js/pixabay-api';
import { clearGallery, createGallery, hideLoader, showLoader } from './js/render-functions';

const imgInput = document.querySelector(".search-input");
const searchForm = document.querySelector(".form");

imgInput.addEventListener('focus', () => {
  imgInput.value = ''; 
});

searchForm.addEventListener ("submit", (event)=>{
    event.preventDefault();   
    
    const query = imgInput.value.trim();
   
    if (query === "") {
        return;
    }
    
    clearGallery();
    showLoader();

    getImagesByQuery(query)
    .then((data) => {
        if (data.hits.length === 0){
            iziToast.error({
                title: '❌',
                message: `Sorry, there are no images matching your search query. Please try again!`,
                position: 'topRight',
                timeout: '2000',});
    } else {createGallery(data.hits);}
    })
    .catch (error => {console.log(error);
            iziToast.error({
                title: 'Error',
                message: `Something went wrong with the server request. Please try again later.!`,
                position: 'topRight',
                timeout: '2000',});
            })
    .finally (()=>hideLoader());
})









