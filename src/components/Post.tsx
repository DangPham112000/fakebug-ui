import React from "react";
import Image from "./Image";
import { PostMoreAction } from "./PostMoreAction";
import { PostInteraction } from "./PostInteraction";
import { Avatar } from "./Avatar";

export const Post = () => {
  return (
    <div className="p-4 border-y-[1px] border-borderGray">
      {/* Post Type */}
      <div className="flex items-center gap-2 text-sm text-textGray mb-2 font-bold">
        {/* icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            fill="#71767b"
            d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
          />
        </svg>
        <span>@Duntuhuhu reposted</span>
      </div>
      {/* Post */}
      <div className="flex gap-4">
        {/* Avatar */}
        <Avatar />
        {/* Content */}
        <div className="flex-1 flex flex-col gap-2">
          {/* Head */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center flex-wrap gap-2">
              <h1 className="text-md font-bold">Dang Pham</h1>
              <span className="text-textGray">@dantehehe</span>
              <span className="text-textGray">24h</span>
            </div>
            <PostMoreAction />
          </div>
          {/* Text & Media */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad officiis
            sed commodi quasi numquam, est nulla consequatur perferendis aliquam
            quo deleniti mollitia. Laborum maxime quasi quis facere illum quia
            fugiat!
          </p>
          <Image path="/test/post.jpeg" w={600} h={600} alt="" />
          <PostInteraction />
        </div>
      </div>
    </div>
  );
};
