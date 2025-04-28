import React from "react";
import Image from "./Image";

export const Search = () => {
  return (
    <div className="flex items-center gap-4 rounded-full py-2 px-4 bg-inputGray">
      <Image path="icons/explore.svg" alt="search" h={16} w={16} />
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent outline-none placeholder:text-textGray"
      />
    </div>
  );
};
