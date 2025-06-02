'use client';
import apiClient from '.';

export const clientFetchPosts = async ({
  pageParam = 1,
  userProfileId,
}: {
  pageParam?: number;
  userProfileId?: string;
}): Promise<any> => {
  try {
    const LIMIT = 3;
    const response = await apiClient.get(
      `/posts/feed?limit=${LIMIT}&cursor=${pageParam}`,
    );
    return response;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};
