import React from 'react';
import { Post } from './Post';
import { serverfetchPosts } from '@/serviceApi/server/postService';
import ErrorBoundary from './ErrorBoundary';

type Props = {
  username?: string;
};

export const Feed = async ({ username }: Props) => {
  let posts = await serverfetchPosts(username);

  return (
    <div>
      {posts && posts.length > 0 ? (
        posts.map((post: any) => (
          <div key={post.id}>
            <Post />
            {/* <Post post={post} /> */}
          </div>
        ))
      ) : (
        <ErrorBoundary error={new Error('No posts found')} />
      )}
    </div>
  );
};
