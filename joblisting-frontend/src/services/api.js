// src/services/api.js

import axios from 'axios';

// const API_BASE_URL = 'http://localhost:8080/api'; // Update with your backend API base URL
const API_BASE_URL = 'joblisting-production.up.railway.app';

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Define your API functions here
export const getAllPosts = () => api.get('/allPosts');
export const searchPosts = (text) => api.get(`/posts/${text}`);
export const addPost = (postData) => api.post('/post', postData); // Updated function name

// Other API functions...

export default api;
