'use server';

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
