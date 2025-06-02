import apiClient from '.';

export const getUser = (id: number) => apiClient.get(`/users/${id}`);
export const updateUser = (id: number, data: any) =>
  apiClient.put(`/users/${id}`, data);
