import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  allowedDevOrigins: ["https://housetab.com", "https://www.housetab.com", "http://localhost:3000"],
};

export default nextConfig;
