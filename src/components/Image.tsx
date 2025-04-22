"use client";
import { Image } from "@imagekit/next";
import React from "react";

type ImageType = {
  path: string;
  alt: string;
  w?: number;
  h?: number;
  className?: string;
  tr?: boolean;
};

const IMAGEKIT_URL_ENDPOINT = "https://ik.imagekit.io/dantehehe";

export default ({ path, alt, w, h, className, tr }: ImageType) => {
  return (
    <Image
      urlEndpoint={IMAGEKIT_URL_ENDPOINT}
      src={path}
      alt={alt}
      width={w}
      height={h}
      {...(tr && { transformation: [{ width: `${w}`, height: `${h}` }] })}
      className={className}
    />
  );
};
