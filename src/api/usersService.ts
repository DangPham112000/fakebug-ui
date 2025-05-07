// api/userService.js
import apiClient from "./client";

export const getUser = (id: number) => apiClient.get(`/users/${id}`);
export const updateUser = (id: number, data: any) =>
  apiClient.put(`/users/${id}`, data);
