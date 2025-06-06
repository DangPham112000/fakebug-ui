'use server';
import FollowButton from '@/components/client/FollowButton';
import ErrorBoundary from '@/components/ErrorBoundary';
import { Feed } from '@/components/Feed';
import Image from '@/components/Image';
import { serverFetchUserByUsername } from '@/serviceApi/server/userService';
import Link from 'next/link';
import React from 'react';

type Props = {
  params: Promise<{
    username: string;
  }>;
};

const UserPage = async ({ params }: Props) => {
  const { username } = await params;

  const user = await serverFetchUserByUsername(username);
  if (!user) return <ErrorBoundary error={new Error('No user found')} />;

  return (
    <div className="">
      {/* Profile Title */}
      <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#00000084]">
        <Link href={'/'}>
          <Image path="icons/back.svg" alt="back" w={24} h={24} />
        </Link>
        <h1 className="font-bold text-lg">{user?.displayName}</h1>
      </div>
      {/* Info */}
      <div className="">
        {/* Cover & Avatar Container */}
        <div className="relative w-full">
          {/* Cover */}
          <div className="w-full aspect-[3/1] overflow-hidden flex items-center">
            <Image
              path={user?.cover || '/test/post.jpeg'}
              alt=""
              w={600}
              h={200}
              tr={true}
            />
          </div>
          {/* Avatar */}
          <div className="w-1/5 aspect-square rounded-full overflow-hidden border-4 border-black absolute left-4 -translate-y-1/2">
            <Image
              path={user?.img || '/test/avatar.png'}
              alt="avatar"
              w={150}
              h={150}
              tr={true}
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-end gap-2 p-2">
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Image path="icons/more.svg" alt="more" w={20} h={20} />
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Image path="icons/explore.svg" alt="explore" w={20} h={20} />
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Image path="icons/message.svg" alt="message" w={20} h={20} />
          </div>
          <FollowButton userId={user?.id} isFollowing={true} />
        </div>
        {/* User Details */}
        <div className="p-4 flex flex-col gap-2">
          {/* Username */}
          <div className="">
            <h1 className="text-2xl font-bold">{user?.displayName}</h1>
            <span className="text-textGray text-sm">
              @{user?.account?.username}
            </span>
          </div>
          <p>{user?.bio}</p>
          {/* Job & Location & Date */}
          <div className="flex gap-4 text-textGray text-[15px]">
            <div className="flex items-center gap-2">
              <Image
                path="icons/userLocation.svg"
                alt="user_location"
                w={20}
                h={20}
              />
              <span>{user?.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Image path="icons/date.svg" alt="date" w={20} h={20} />
              <span>
                Joined{' '}
                {new Date(user?.createdAt.toString()).toLocaleDateString(
                  'en-US',
                  { month: 'long', year: 'numeric' },
                )}
              </span>
            </div>
          </div>
          {/* Followings & Followers */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold">{user?._count?.followings}</span>
              <span className="text-[15px] text-textGray">Followings</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">{user?._count?.followers}</span>
              <span className="text-[15px] text-textGray">Followers</span>
            </div>
          </div>
        </div>
      </div>
      {/* Feeds */}
      <Feed username={username} />
    </div>
  );
};

export default UserPage;
