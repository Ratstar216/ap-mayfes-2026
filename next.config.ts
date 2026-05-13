import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  basePath: "/2026",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
