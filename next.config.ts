import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
      },
    ],
  },
  // Set a custom port for the application
  serverRuntimeConfig: {
    port: 4000, // Custom port
  },
};

export default nextConfig;
