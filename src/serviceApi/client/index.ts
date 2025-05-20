'use client';
import { clearToken, getClientToken } from '@/helpers/client/tokenManagement';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle global errors (auth, server down, etc.)
    if (!error.response) {
      // Server down
      return Promise.reject(error);
    }
    if (error.response.status === 401) {
      // Redirect to login
      clearToken();
      window.location.href = '/sign-in';
      return Promise.reject(error);
    }
    return Promise.reject(error);
  },
);

apiClient.interceptors.request.use((config) => {
  const token = getClientToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;
