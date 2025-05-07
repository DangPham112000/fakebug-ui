import apiClient from './client';

export const getUser = (id: number) => apiClient.get(`/posts/${id}`);
