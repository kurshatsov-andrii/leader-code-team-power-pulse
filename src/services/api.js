import axios from 'axios';

const API_URL = 'http://localhost:3002/';

export const instance = axios.create({
  baseURL: API_URL,
});

class APIService {
  fetchCategories = async (filter) => {
    const response = await instance.get(`/exercises/${filter}`);
    return response.data.data;
  };

  fetchExercises = async (fiter, bodyPart) => {
    if (!bodyPart) {
      return null;
    }
    const response = await instance.get(`/exercises/${fiter}/${bodyPart}`);
    return response.data.data;
  };
}

export default new APIService();
