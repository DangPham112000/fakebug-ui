import React from "react";
import Image from "./Image";

type AvatarType = { path?: string };

export const Avatar = ({ path = "/test/avatar.png" }: AvatarType) => {
  return (
    <div className="w-10 h-10 rounded-full overflow-hidden">
      <Image path={path} w={100} h={100} tr={true} alt="avatar" />
    </div>
  );
};
