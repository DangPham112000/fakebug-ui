import React from "react";
import { Post } from "./Post";
import { Avatar } from "./Avatar";

export default function Comments() {
  return (
    <div>
      <form className="flex items-center gap-4 p-4">
        <Avatar />
        <input
          type="text"
          className="flex-1 bg-transparent outline-none p-2 text-xl"
          placeholder="Post your reply"
        />
        <button
          type="submit"
          className="py-2 px-4 font-bold rounded-full bg-white text-black"
        >
          Reply
        </button>
      </form>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
