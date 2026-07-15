import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    /** Inline Tailwind in HTML to avoid render-blocking stylesheet on first paint. */
    inlineCss: true
  },

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
        /**
         * ffmpeg.wasm (used only for M4A/M4R export on the MP3 cutter tool)
         * needs SharedArrayBuffer, which requires cross-origin isolation.
         * Scoped to just this tool's routes — applying COEP: require-corp
         * site-wide would break third-party AdSense iframes on other pages.
         */
        source: "/mp3-cutter",
        headers: [
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Cross-Origin-Embedder-Policy", value: "require-corp" }
        ]
      },
      {
        source: "/:lang/mp3-cutter",
        headers: [
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Cross-Origin-Embedder-Policy", value: "require-corp" }
        ]
      },
      {
        source: "/blogimages/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable"
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
