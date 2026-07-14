import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

export const VOCAL_REMOVER_DAILY_LIMIT = 3;

let cached: Ratelimit | null | undefined;

/**
 * Lazily builds a per-IP fixed-window limiter backed by Upstash Redis.
 * Returns null (and callers fall back to "allow") when Upstash isn't
 * configured yet, so the tool keeps working while the limiter is optional.
 */
function getRatelimit(): Ratelimit | null {
  if (cached !== undefined) return cached;

  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url?.trim() || !token?.trim()) {
    cached = null;
    return cached;
  }

  cached = new Ratelimit({
    redis: new Redis({ url, token }),
    limiter: Ratelimit.fixedWindow(VOCAL_REMOVER_DAILY_LIMIT, "1 d"),
    prefix: "vocal-remover"
  });
  return cached;
}

/** Best-effort client IP from Vercel's forwarded headers. */
export function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]!.trim();
  const real = req.headers.get("x-real-ip");
  if (real) return real.trim();
  return "unknown";
}

export type DailyLimitResult = {
  allowed: boolean;
  remaining: number;
  limit: number;
  /** False when Upstash env vars are missing — limiter is not actively enforcing. */
  configured: boolean;
};

/** Checks (and consumes one unit of) the per-IP daily quota for vocal separation jobs. */
export async function checkDailyLimit(ip: string): Promise<DailyLimitResult> {
  const ratelimit = getRatelimit();
  if (!ratelimit) {
    return { allowed: true, remaining: VOCAL_REMOVER_DAILY_LIMIT, limit: VOCAL_REMOVER_DAILY_LIMIT, configured: false };
  }

  const { success, remaining } = await ratelimit.limit(ip);
  return { allowed: success, remaining: Math.max(0, remaining), limit: VOCAL_REMOVER_DAILY_LIMIT, configured: true };
}
