// api.js

import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
    // Add any common headers here
  },
});

export const loginUser = async (email, password) => {
  const { data } = await axiosInstance.post('auth/login', {
    email,
    password,
  });
  localStorage.setItem('token', data.result.accessToken);
  return data;
};

export const fetchProjects = async (searchTerm) => {
  try {
    const response = await axiosInstance.get('/project', {
      params: {
        search: searchTerm,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch projects');
  }
};