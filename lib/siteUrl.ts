const CANONICAL_PRODUCTION_URL = "https://morsecodeworld.org";

/** Apex only — never www — for metadata, canonical, sitemap, Open Graph base. */
function stripWwwMorsecodeworld(url: string): string {
  try {
    const u = new URL(url);
    if (u.hostname === "www.morsecodeworld.org") {
      u.hostname = "morsecodeworld.org";
      return u.origin;
    }
  } catch {
    /* ignore */
  }
  return url.replace(/\/$/, "");
}

/**
 * Canonical origin for the live site (sitemap, robots, metadataBase).
 * If env points at www.morsecodeworld.org, it is normalized to apex.
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return stripWwwMorsecodeworld(fromEnv);

  if (process.env.VERCEL_ENV === "production") {
    return CANONICAL_PRODUCTION_URL;
  }

  if (process.env.VERCEL_URL) {
    const host = process.env.VERCEL_URL.replace(/^https?:\/\//, "");
    return `https://${host}`;
  }

  return CANONICAL_PRODUCTION_URL;
}
