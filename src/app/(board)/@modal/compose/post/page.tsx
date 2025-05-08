"use client";
import { Avatar } from "@/components/Avatar";
import Image from "@/components/Image";
import { useRouter } from "next/navigation";
import React from "react";

const PostModal = () => {
  const router = useRouter();

  const closeHandling = () => {
    router.back();
  };

  return (
    <div className="absolute w-screen h-screen top-0 left-0 z-20 bg-[#293139a6] flex justify-center">
      <div className="py-4 px-8 rounded-xl bg-black w-[600px] h-max mt-12">
        {/* Top */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="cursor-pointer"
            onClick={closeHandling}
          >
            X
          </button>
          <div className="font-bold text-iconBlue">Drafts</div>
        </div>
        {/* Center */}
        <div className="py-8 flex gap-4">
          <Avatar />
          <input
            type="text"
            className="flex-1 bg-transparent outline-none text-lg"
            placeholder="What's happening?"
          />
        </div>
        {/* Bottom */}
        <div className="flex items-center justify-between gap-4 flex-wrap border-t border-borderGray pt-4">
          <div className="flex gap-4 flex-wrap items-center">
            <Image
              className="cursor-pointer"
              path="/icons/image.svg"
              w={20}
              h={20}
              alt=""
            />
            <Image
              className="cursor-pointer"
              path="/icons/gif.svg"
              w={20}
              h={20}
              alt=""
            />
            <Image
              className="cursor-pointer"
              path="/icons/poll.svg"
              w={20}
              h={20}
              alt=""
            />
            <Image
              className="cursor-pointer"
              path="/icons/emoji.svg"
              w={20}
              h={20}
              alt=""
            />
            <Image
              className="cursor-pointer"
              path="/icons/schedule.svg"
              w={20}
              h={20}
              alt=""
            />
            <Image
              className="cursor-pointer"
              path="/icons/location.svg"
              w={20}
              h={20}
              alt=""
            />
          </div>
          <button
            type="button"
            className="py-2 px-5 font-bold rounded-full text-black bg-white"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
