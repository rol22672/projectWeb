import axios from 'axios';

const api = axios.create({
  baseURL: 'http://programmerscrew.com:49160/',
});

export default api;