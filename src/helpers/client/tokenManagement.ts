'use client';

export const getClientToken = (): string | null => {
  const token =
    localStorage.getItem('accessToken') ||
    document.cookie.split('token=')[1]?.split(';')[0] ||
    null;

  return token;
};

export const setToken = (token: string): void => {
  localStorage.setItem('accessToken', token);
  document.cookie = `token=${token}; path=/; max-age=${60 * 60 * 24 * 7}`;
};

export const clearToken = (): void => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  document.cookie = 'token=; path=/; max-age=0';
};
