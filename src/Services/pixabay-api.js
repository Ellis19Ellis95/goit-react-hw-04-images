import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';
const API_KEY = '40888657-ae0ce11af3f2249fd91388a4c';

export const getImages = async (values, currentPage = 1) => {
	const params = new URLSearchParams({
		q: values,
		page: currentPage,
		key: API_KEY,
		image_type: 'photo',
		orientation: 'horizontal',
		per_page: 12,
	});

   const response = await axios.get('/api/', {params})
   return response.data;
};