'use server';

import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';

export const getServerToken = async (): Promise<string | null> => {
  try {
    // Use provided cookie store or get from headers
    const cookieJar = await cookies();
    return cookieJar.get('token')?.value || null;
  } catch (error) {
    console.error('Error getting server token:', error);
    return null;
  }
};

export const decodeToken = async () => {
  try {
    const token = await getServerToken();
    if (!token) return null;
    return jwtDecode(token);
  } catch (error) {
    return null;
  }
};
