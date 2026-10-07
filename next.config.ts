import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep resolution inside this application when other local projects have lockfiles.
  turbopack: { root: process.cwd() },
};

export default nextConfig;
