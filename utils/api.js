import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const getPipeline = async () => {
  try {
    const response = await api.get('/pipeline');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createPipeline = async (data) => {
  try {
    const response = await api.post('/pipeline', data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};