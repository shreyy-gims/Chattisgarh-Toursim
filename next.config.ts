import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      loaders: {},
    },
  },
};

export default nextConfig;
