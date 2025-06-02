import React from 'react';
import { Post } from './Post';
import { serverfetchPosts } from '@/serviceApi/server/postService';
import ErrorBoundary from './ErrorBoundary';
import InfiniteFeed from './InfiniteFeed';

type Props = {
  username?: string;
};

export const Feed = async ({ username }: Props) => {
  return (
    <div>
      <InfiniteFeed />
    </div>
  );
};
