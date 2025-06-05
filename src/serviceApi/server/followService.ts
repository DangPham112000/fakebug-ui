'use server';
import { getServerApi, fetchWithAuth } from '.';

export const serverGetFriendRecommendations = async () => {
  return fetchWithAuth(async () => {
    const apiServer = await getServerApi();
    const response = await apiServer.get(`/follows/friendRecommendations`);
    return response.data;
  });
};
