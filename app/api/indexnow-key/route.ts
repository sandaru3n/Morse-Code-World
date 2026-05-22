/**
 * Serves the IndexNow key-verification file.
 * Bing verifies ownership by fetching https://morsecodeworld.org/{INDEXNOW_KEY}.txt
 * Set the INDEXNOW_KEY environment variable in Vercel project settings.
 */
export function GET() {
  const key = process.env.INDEXNOW_KEY;

  if (!key) {
    return new Response("IndexNow key not configured.", { status: 404 });
  }

  return new Response(key, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400"
    }
  });
}
