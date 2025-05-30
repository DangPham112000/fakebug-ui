'use server';
import { getServerApi, fetchWithAuth } from '.';

export const serverfetchPosts = async (username?: string) => {
  return fetchWithAuth(async () => {
    const apiServer = await getServerApi();
    const response = await apiServer.get(
      username ? `posts/user/${username}` : '/posts/feed',
    );
    return response.data;
  });
};
