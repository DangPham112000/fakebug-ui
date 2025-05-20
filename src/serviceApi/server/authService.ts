'use server';
import { getServerToken } from '@/helpers/server/tokenManagement';
import { redirect } from 'next/navigation';

// Check if user is authenticated
export async function checkServerAuth() {
  const token = await getServerToken();
  if (!token) {
    redirect('/sign-in');
  }
  return true;
}
