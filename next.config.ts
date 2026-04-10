import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === "production"
  },
  async redirects() {
    return [
      {
        source: "/picture-translator",
        destination: "/morse-code-picture-translator",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
