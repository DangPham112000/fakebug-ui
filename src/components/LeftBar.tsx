import Link from "next/link";
import React from "react";
import Image from "./Image";
import { Avatar } from "./Avatar";

const menuList = [
  {
    id: 1,
    name: "Homepage",
    link: "/",
    icon: "home.svg",
  },
  {
    id: 2,
    name: "Explore",
    link: "/",
    icon: "explore.svg",
  },
  {
    id: 3,
    name: "Notification",
    link: "/",
    icon: "notification.svg",
  },
  {
    id: 4,
    name: "Messages",
    link: "/",
    icon: "message.svg",
  },
  {
    id: 5,
    name: "Bookmarks",
    link: "/",
    icon: "bookmark.svg",
  },
  {
    id: 6,
    name: "Jobs",
    link: "/",
    icon: "job.svg",
  },
  {
    id: 7,
    name: "Communities",
    link: "/",
    icon: "community.svg",
  },
  {
    id: 8,
    name: "Premium",
    link: "/",
    icon: "logo.svg",
  },
  {
    id: 9,
    name: "Profile",
    link: "/",
    icon: "profile.svg",
  },
  {
    id: 10,
    name: "More",
    link: "/",
    icon: "more.svg",
  },
];

export const LeftBar = () => {
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8">
      {/* LOGO + MENU SECTION */}
      <div className="flex flex-col items-center xxl:items-start gap-4 text-lg ">
        {/* LOGO */}
        <Link href="/" className="p-2 rounded-full hover:bg-[#181818]">
          <Image path="/icons/logo.svg" alt="" w={24} h={24} />
        </Link>
        {/* MENU LIST */}
        <div className="flex flex-col gap-4">
          {menuList.map((menuItem) => (
            <Link
              href={menuItem.link}
              key={menuItem.id}
              className="flex items-center gap-4 p-2 rounded-full hover:bg-[#181818]"
            >
              <Image
                path={`/icons/${menuItem.icon}`}
                alt={menuItem.name}
                w={24}
                h={24}
              />
              <span className="xxl:inline hidden">{menuItem.name}</span>
            </Link>
          ))}
        </div>
        {/* BUTTON */}
        <Link
          href="/"
          className="flex justify-center items-center bg-white rounded-full xxl:w-auto w-12 xxl:h-auto h-12"
        >
          <Image
            className="xxl:hidden block"
            path="/icons/post.svg"
            alt="new_post"
            w={24}
            h={24}
          />
          <span className="xxl:block hidden text-black font-bold py-3 px-20">
            Post
          </span>
        </Link>
      </div>
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar />
          <div className="xxl:flex hidden flex-col">
            <span className="font-bold">Dang Pham</span>
            <span className="text-sm text-textGray">@Dante__hehe</span>
          </div>
        </div>
        <div className="xxl:block hidden cursor-pointer font-bold">...</div>
      </div>
    </div>
  );
};
