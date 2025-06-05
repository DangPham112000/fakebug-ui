'use client';
import React, { useState } from 'react';

type Props = {
  userId: string;
  isFollowing: boolean;
};

export default function FollowButton({ userId, isFollowing }: Props) {
  const [isHovering, setIsHovering] = useState(false);
  const [isFollowingState, setIsFollowingState] = useState(isFollowing);

  return (
    <button
      type="button"
      className={`font-bold cursor-pointer rounded-full py-2 px-4 ring-1 ${
        isFollowingState
          ? isHovering
            ? 'bg-black text-red-500 ring-red-500'
            : 'bg-black text-white'
          : 'bg-white text-black'
      }`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={() => setIsFollowingState(!isFollowingState)}
    >
      {isFollowingState ? (isHovering ? 'Unfollow' : 'Following') : 'Follow'}
    </button>
  );
}
