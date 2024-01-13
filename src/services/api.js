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

  fetchExercises = async () => {
    const response = await instance.get('/exercises/exercises');
    return response.data.data;
  };
}

export default new APIService();
