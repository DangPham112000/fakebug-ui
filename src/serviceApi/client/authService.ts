'use client';
import apiClient from '.';
import { setToken } from '@/helpers/client/tokenManagement';

export const authenticateUser = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  try {
    const response = await apiClient.post('/auth/login', {
      username,
      password,
    });
    const { accessToken, refreshToken } = response.data;

    // Store tokens using our utility
    localStorage.setItem('refreshToken', refreshToken);
    setToken(accessToken);

    return accessToken;
  } catch (error) {
    console.log('authenUser err: ', error);
    return null;
  }
};

export const registerUser = async ({
  username,
  email,
  password,
}: {
  username: string;
  email: string;
  password: string;
}) => {
  try {
    const response = await apiClient.post('/auth/register', {
      username,
      email,
      password,
    });
    const { accessToken, refreshToken } = response.data;

    // Store tokens using our utility
    localStorage.setItem('refreshToken', refreshToken);
    setToken(accessToken);

    return accessToken;
  } catch (error) {
    console.log('registerUser err: ', error);
    return null;
  }
};
