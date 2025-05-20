'use server';
import axios, { AxiosError } from 'axios';
import { cookies } from 'next/headers';

const createServerApi = (token?: string) => {
  const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Add token to request if available
  if (token) {
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  // Add response interceptor to handle 401 errors
  apiClient.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
      if (error.response?.status === 401) {
        // We can't directly redirect from here in a server component
        // Instead, we'll throw a specific error that can be caught by the caller
        throw new Error('UNAUTHORIZED');
      }
      return Promise.reject(error);
    },
  );

  return apiClient;
};

// Get token from cookies and create client
export const getServerApi = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  return createServerApi(token);
};

// Helper function to handle unauthorized errors and redirect
export async function fetchWithAuth<T>(fetchFn: () => Promise<T>): Promise<T> {
  try {
    return await fetchFn();
  } catch (error) {
    throw new Error('UNAUTHORIZED');
  }
}
