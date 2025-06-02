'use client';
import { clientFetchPosts } from '@/serviceApi/client/postService';
import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Post } from './Post';

type Props = {
  userProfileId?: string;
};

export default function InfiniteFeed({ userProfileId }: Props) {
  const { data, error, fetchNextPage, hasNextPage, status } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: ({ pageParam = 1 }) => clientFetchPosts({ pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.data.hasMore ? allPages.length + 1 : undefined;
    },
  });

  if (error) return 'Something went wrong';
  if (status === 'pending') return 'Loading...';

  const allPosts = data?.pages.flatMap((page) => page.data.posts) || [];

  return (
    <InfiniteScroll
      dataLength={allPosts.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<h4>Loading...</h4>}
      endMessage={<p>No more posts</p>}
    >
      {allPosts.map((post: any) => (
        <div key={post.id}>
          <Post post={post} />
        </div>
      ))}
    </InfiniteScroll>
  );
}
