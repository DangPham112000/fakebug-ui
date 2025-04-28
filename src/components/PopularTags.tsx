import React from "react";
import Image from "./Image";
import Link from "next/link";

export const PopularTags = () => {
  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
      <h1 className="text-xl font-bold text-textGrayLight">
        {"What's"} happening
      </h1>
      {/* Live */}
      <div className="flex gap-4">
        <Image
          path="test/Trina_with_Cow.jpg"
          alt="live_event"
          w={120}
          h={120}
          tr={true}
          className="w-20 h-20 overflow-hidden rounded-xl"
        />
        <div className="flex-1">
          <h2 className="font-bold text-textGrayLight">
            Trina opens drawing class!!!
          </h2>
          <span className="text-sm text-textGray">LIVE</span>
        </div>
      </div>
      {/* Topics */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">
            Business & finance · Trending
          </span>
          <Image path="icons/infoMore.svg" alt="more" w={16} h={16} />
        </div>
        <h2 className="font-bold text-textGrayLight">The ETH</h2>
        <span className="text-textGray text-sm">20K posts</span>
      </div>
      {/* Topics */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">
            Business & finance · Trending
          </span>
          <Image path="icons/infoMore.svg" alt="more" w={16} h={16} />
        </div>
        <h2 className="font-bold text-textGrayLight">The ETH</h2>
        <span className="text-textGray text-sm">20K posts</span>
      </div>
      {/* Topics */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">
            Business & finance · Trending
          </span>
          <Image path="icons/infoMore.svg" alt="more" w={16} h={16} />
        </div>
        <h2 className="font-bold text-textGrayLight">The ETH</h2>
        <span className="text-textGray text-sm">20K posts</span>
      </div>
      {/* Topics */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">
            Business & finance · Trending
          </span>
          <Image path="icons/infoMore.svg" alt="more" w={16} h={16} />
        </div>
        <h2 className="font-bold text-textGrayLight">The ETH</h2>
        <span className="text-textGray text-sm">20K posts</span>
      </div>
      <Link href={"/"} className="text-iconBlue">
        Show more
      </Link>
    </div>
  );
};
