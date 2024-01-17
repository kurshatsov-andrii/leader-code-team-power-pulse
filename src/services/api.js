import axios from 'axios';
import { queryDecoder } from '../utils/queryEditior';

const API_URL = 'http://localhost:3002/';

const instance = axios.create({
  baseURL: API_URL,
});

class APIService {
  fetchCategories = async (filter) => {
    const response = await instance.get(`/exercises/${filter}`);
    return response.data.data;
  };

  fetchExercises = async (bodyPart) => {
    if (!bodyPart) {
      return null;
    }
    const response = await instance.get('/exercises/');
    console.log(response);
    const decodedBodyPart = queryDecoder(bodyPart);
    return response.data.data.filter((category) => category.bodyPart === decodedBodyPart);
  };
}

export default new APIService();
