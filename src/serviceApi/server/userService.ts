'use server';
import { getServerApi, fetchWithAuth } from '.';

export const serverFetchUserByUsername = async (username: string) => {
  return fetchWithAuth(async () => {
    const apiServer = await getServerApi();
    const response = await apiServer.get(`/users/${username}`);
    return response.data;
  });
};

export const serverGetCurrentUser = async () => {
  return fetchWithAuth(async (tokenBody: any) => {
    const { sub: accountId } = await tokenBody;
    const apiServer = await getServerApi();
    const response = await apiServer.get(`/users/account/${accountId}`);
    return response.data;
  });
};
