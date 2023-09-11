import axios from 'axios';
import { Data } from '../interfaces/Data';
// import dotenv from 'dotenv';

// dotenv.config(); // Load environment variables from .env file

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL || '';

export const get = (url: string) => axios.get(url);

export const post = (url: string, data: Data) => axios.post(url, data);

export const put = (url: string, data: Data) => axios.put(url, data);

export const del = (url: string) => axios.delete(url);

export const api = {
  get,
  post,
  put,
  del,
};

export default api;
