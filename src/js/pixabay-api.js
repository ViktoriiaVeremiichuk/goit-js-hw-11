import axios from 'axios';

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "54231764-14b33dfcfee9941eea7be9726";


export async function getImagesByQuery(query) {
const response = await axios.get (BASE_URL, { params:
    {q: query,
    key: API_KEY,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    per_page: 50,}
});
return response.data; 
}




