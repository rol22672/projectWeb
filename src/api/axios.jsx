import axios from 'axios';

const api = axios.create({
  baseURL: 'https://programmerscrew.com:49162/',
});

export default api;