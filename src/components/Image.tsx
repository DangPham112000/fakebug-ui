"use client";
import { buildSrc, Image } from "@imagekit/next";
import React, { useState } from "react";

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
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  
  return (
    <Image
      urlEndpoint={IMAGEKIT_URL_ENDPOINT}
      src={path}
      alt={alt}
      width={w}
      height={h}
      {...(tr && { transformation: [{ width: `${w}`, height: `${h}` }] })}
      className={className}
      loading="lazy"
      style={
        showPlaceholder
          ? {
              backgroundImage: `url(${buildSrc({
                urlEndpoint: IMAGEKIT_URL_ENDPOINT,
                src: path,
                transformation: [
                  {
                    quality: 20,
                    blur: 90,
                  },
                ],
              })})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }
          : {}
      }
      onLoad={() => {
        setShowPlaceholder(false);
      }}
    />
  );
};
