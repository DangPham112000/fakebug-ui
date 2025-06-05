'use server';
import Link from 'next/link';
import React from 'react';
import Image from '@/components/Image';
import { serverGetFriendRecommendations } from '@/serviceApi/server/followService';

export const Recommendations = async () => {
  const friendRecommendations = await serverGetFriendRecommendations();

  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
      <h1 className="font-bold text-xl">Who to follow</h1>

      {friendRecommendations.map((user: any) => (
        <div key={user?.id} className="flex items-center gap-2">
          <Image
            path={user?.img || 'test/avatar.png'}
            alt="avt"
            w={100}
            h={100}
            tr={true}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1 flex items-center justify-between gap-2">
            <div className="flex flex-col">
              <h2 className="font-bold text-textGrayLight">
                {user?.displayName}
              </h2>
              <span className="text-sm text-textGray">
                @{user?.account?.username}
              </span>
            </div>
            <button
              type="button"
              className="rounded-full py-1 px-4 font-bold text-black bg-white"
            >
              Follow
            </button>
          </div>
        </div>
      ))}

      <Link href={'/'} className="text-iconBlue">
        Show more
      </Link>
    </div>
  );
};
