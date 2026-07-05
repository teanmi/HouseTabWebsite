import type { NextConfig } from "next";
import { env } from "process";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  output: env.NODE_ENV === "production" ? "export" : undefined,
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["https://housetab.com", "https://www.housetab.com", "http://localhost:3000"],
};

export default nextConfig;
