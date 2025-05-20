'use client';

import ErrorBoundary from '@/components/ErrorBoundary';
import React from 'react';

export default function Error({ error }: { error: Error }) {
  return <ErrorBoundary error={error} />;
}
