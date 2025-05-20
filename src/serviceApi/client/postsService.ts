import apiClient from '.';

export const fetchPosts = async (): Promise<any> => {
  try {
    const response = await apiClient.get('/posts');
    return response;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};
