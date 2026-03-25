import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "file-dev.flytechy.com",
      },
    ],
  },
};

export default nextConfig;
