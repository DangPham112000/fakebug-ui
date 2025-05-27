'use server';
import { getServerApi, fetchWithAuth } from '.';

export const serverfetchUser = async (username: string) => {
  return fetchWithAuth(async () => {
    const apiServer = await getServerApi();
    const response = await apiServer.get(`/users/${username}`);
    return response.data;
  });
};
