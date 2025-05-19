'use client';
import apiClient from './client';

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

    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);

    // Also set token in cookie for middleware authentication
    document.cookie = `token=${accessToken}; path=/; max-age=${
      60 * 60 * 24 * 7
    }`; // 7 days

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

    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);

    // Also set token in cookie for middleware authentication
    document.cookie = `token=${accessToken}; path=/; max-age=${
      60 * 60 * 24 * 7
    }`; // 7 days

    return accessToken;
  } catch (error) {
    console.log('registerUser err: ', error);
    return null;
  }
};
