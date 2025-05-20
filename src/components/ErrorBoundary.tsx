'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { clearToken } from '@/helpers/client/tokenManagement';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset?: () => void;
}) {
  const router = useRouter();

  const reload = () => {
    router.refresh();
  };

  useEffect(() => {
    if (
      error.message === 'UNAUTHORIZED' ||
      error.message.includes('unauthorized')
    ) {
      console.log('Toi da den day');
      clearToken();
      router.push('/sign-in');
    }
  }, [error, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-4">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <p className="text-gray-400 mb-6">{error.message}</p>
      <button
        onClick={reset || reload}
        className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
      >
        Try again
      </button>
    </div>
  );
}
