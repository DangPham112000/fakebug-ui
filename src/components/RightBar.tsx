import React from "react";
import { Search } from "./Search";
import { PopularTags } from "./PopularTags";
import { Recommendations } from "./Recommendations";
import Link from "next/link";

export const RightBar = () => {
  return (
    <div className="pt-4 flex flex-col gap-4 sticky top-0 h-max">
      <Search />
      <PopularTags />
      <Recommendations />
      <div className="flex flex-wrap gap-x-4 text-textGray text-sm">
        <Link href={"/"}>Terms of Service</Link>
        <Link href={"/"}>Privacy Policy</Link>
        <Link href={"/"}>Cookie Policy</Link>
        <Link href={"/"}>Accessibility</Link>
        <Link href={"/"}>Ads info</Link>
        <Link href={"/"}>More...</Link>
        <span>© 2025 F Corp.</span>
      </div>
    </div>
  );
};
