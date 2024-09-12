// axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3', // Ensure this is correct
});

export default instance;
