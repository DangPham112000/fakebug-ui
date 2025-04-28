import React from "react";
import { Video } from "@imagekit/next";

type VideoType = {
  path: string;
  className?: string;
  tr?: boolean;
};

const IMAGEKIT_URL_ENDPOINT = "https://ik.imagekit.io/dantehehe";

export default ({ path, className, tr }: VideoType) => {
  return (
    <Video
      urlEndpoint={IMAGEKIT_URL_ENDPOINT}
      src={path}
      className={className}
      transformation={[{ width: 1920, height: 1080, quality: 90 }]}
      controls
    />
  );
};
