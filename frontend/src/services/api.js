import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' }); // Update with your backend URL

// API Calls
export const loginUser = (data) => API.post('/auth/login', data);
export const signupUser = (data) => API.post('/auth/signup', data);
