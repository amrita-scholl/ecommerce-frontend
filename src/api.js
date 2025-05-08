import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // Adjust your Java API base URL here
});

export default api;
