import axios from 'axios';
export const API_KEY = '8a2453700f25969e2687d7185f37f7b7';

export const API = axios.create({
  baseURL: 'https://api.themoviedb.org/',
});
