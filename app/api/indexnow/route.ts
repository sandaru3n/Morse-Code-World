import { absoluteUrl } from "@/lib/site";
import { SITE_DOMAIN } from "@/lib/site";

/** All canonical URLs to notify Bing about when content is added or updated. */
const ALL_URLS = [
  "/", "/about",
  "/es", "/ko", "/zh", "/pt", "/ar", "/ja", "/ru", "/de", "/cs",
  "/fr", "/it", "/tr", "/pl", "/nl", "/hi", "/id", "/vi", "/th", "/uk",
  "/morse-code-picture-translator",
  "/audio-morse-code-decoder",
  "/llms.txt"
].map(absoluteUrl);

function hasValidCronAuth(request: Request): boolean {
  const cronSecret = process.env.CRON_SECRET;
  if (!cronSecret) return false;
  return request.headers.get("Authorization") === `Bearer ${cronSecret}`;
}

async function submitToIndexNow() {
  const key = process.env.INDEXNOW_KEY;
  if (!key) {
    return Response.json({ error: "INDEXNOW_KEY not set" }, { status: 500 });
  }

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: SITE_DOMAIN,
        key,
        keyLocation: `https://${SITE_DOMAIN}/${key}.txt`,
        urlList: ALL_URLS
      })
    });

    if (!res.ok) {
      const text = await res.text();
      return Response.json(
        { error: "IndexNow API error", status: res.status, body: text },
        { status: 502 }
      );
    }

    return Response.json({ submitted: ALL_URLS.length, urls: ALL_URLS });
  } catch (err) {
    return Response.json({ error: String(err) }, { status: 500 });
  }
}

/**
 * POST /api/indexnow — Submit all URLs to Bing via IndexNow.
 * Secure with CRON_SECRET in production.
 */
export async function POST(request: Request) {
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret && !hasValidCronAuth(request)) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  return submitToIndexNow();
}

/**
 * GET — status when unauthenticated; submits when called by Vercel Cron (Bearer CRON_SECRET).
 */
export async function GET(request: Request) {
  if (hasValidCronAuth(request)) {
    return submitToIndexNow();
  }

  return Response.json({
    ready: Boolean(process.env.INDEXNOW_KEY),
    urlCount: ALL_URLS.length,
    instruction:
      "Set INDEXNOW_KEY and CRON_SECRET, then POST or trigger GET via Vercel Cron to submit URLs to Bing."
  });
}
