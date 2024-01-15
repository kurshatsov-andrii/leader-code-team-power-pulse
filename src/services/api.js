import axios from 'axios';

const API_URL = 'http://localhost:3002/';

const instance = axios.create({
  baseURL: API_URL,
});

class APIService {
  fetchCategories = async (filter) => {
    const response = await instance.get('/exercises/categories');
    const filteredList = response.data.data.filter(
      (category) => category.filter === filter
    );
    return filteredList;
  };

  fetchExercises = async (bodyPart) => {
    const response = await instance.get('/exercises/');
    return response.data.data.filter(
      (category) => category.bodyPart === bodyPart
    );
  };
}

export default new APIService();