import React from 'react';
import Image from './Image';

type AvatarType = { path?: string };

export const Avatar = ({ path }: AvatarType) => {
  return (
    <div className="w-10 h-10 rounded-full overflow-hidden">
      <Image
        path={path || '/test/avatar.png'}
        w={100}
        h={100}
        tr={true}
        alt="avatar"
      />
    </div>
  );
};
