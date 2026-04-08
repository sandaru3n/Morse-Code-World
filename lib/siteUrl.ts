const CANONICAL_PRODUCTION_URL = "https://morsecodeworld.org";

/** Optional override: NEXT_PUBLIC_SITE_URL (no trailing slash). */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;

  // Vercel sets VERCEL_URL to the deployment host (*.vercel.app). Use the real domain on production.
  if (process.env.VERCEL_ENV === "production") {
    return CANONICAL_PRODUCTION_URL;
  }

  if (process.env.VERCEL_URL) {
    const host = process.env.VERCEL_URL.replace(/^https?:\/\//, "");
    return `https://${host}`;
  }

  return CANONICAL_PRODUCTION_URL;
}
