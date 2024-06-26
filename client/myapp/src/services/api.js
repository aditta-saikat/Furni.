// src/services/api.js

import axios from 'axios';

const API_URL = 'http://localhost:5000/users'; // Adjust the URL if necessary

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error.response || error.message);
    throw error;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error) {
    console.error("Error logging in user:", error.response || error.message);
    throw error;
  }
};
