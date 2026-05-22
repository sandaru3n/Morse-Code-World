import type { NextConfig } from "next";

const INDEXNOW_KEY = process.env.INDEXNOW_KEY ?? "";

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
  },

  /** Serve the IndexNow key-verification file at /{key}.txt */
  async rewrites() {
    if (!INDEXNOW_KEY) return [];
    return [
      {
        source: `/${INDEXNOW_KEY}.txt`,
        destination: "/api/indexnow-key"
      }
    ];
  },

  async headers() {
    return [
      {
        /** Prevent API routes from being indexed by any crawler */
        source: "/api/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }]
      },
      {
        /** Security + trust signals on all pages — helps Bing authority evaluation */
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()"
          }
        ]
      },
      {
        /** Aggressive caching for static assets improves crawl efficiency */
        source: "/favicon/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable"
          }
        ]
      }
    ];
  }
};

export default nextConfig;
