import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

export const VOCAL_REMOVER_DAILY_LIMIT = 3;

let cached: Ratelimit | null | undefined;

/**
 * Vercel's Upstash-for-Redis Marketplace integration injects `KV_REST_API_*`
 * names (legacy "Vercel KV" naming); a manually-created Upstash DB uses the
 * classic `UPSTASH_REDIS_REST_*` names. Support both so either setup works.
 */
function getRedisCredentials(): { url: string; token: string } | null {
  const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
  if (!url?.trim() || !token?.trim()) return null;
  return { url, token };
}

/**
 * Lazily builds a per-IP fixed-window limiter backed by Upstash Redis.
 * Returns null (and callers fall back to "allow") when Redis isn't
 * configured yet, so the tool keeps working while the limiter is optional.
 */
function getRatelimit(): Ratelimit | null {
  if (cached !== undefined) return cached;

  const credentials = getRedisCredentials();
  if (!credentials) {
    console.warn(
      "[vocal-remover] Redis is not configured (missing UPSTASH_REDIS_REST_URL/TOKEN or KV_REST_API_URL/TOKEN). " +
        "The daily separation limit is NOT being enforced — every request is allowed."
    );
    cached = null;
    return cached;
  }

  cached = new Ratelimit({
    redis: new Redis(credentials),
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

const UNCONFIGURED_RESULT = {
  remaining: VOCAL_REMOVER_DAILY_LIMIT,
  limit: VOCAL_REMOVER_DAILY_LIMIT,
  configured: false
} as const;

/** Checks (and consumes one unit of) the per-IP daily quota for vocal separation jobs. */
export async function checkDailyLimit(ip: string): Promise<DailyLimitResult> {
  const ratelimit = getRatelimit();
  if (!ratelimit) {
    return { allowed: true, ...UNCONFIGURED_RESULT };
  }

  try {
    const { success, remaining } = await ratelimit.limit(ip);
    return { allowed: success, remaining: Math.max(0, remaining), limit: VOCAL_REMOVER_DAILY_LIMIT, configured: true };
  } catch (e) {
    // Redis reachable-but-misconfigured (bad token, quoted value, network blip, etc).
    // Fail open rather than 500ing the whole upload flow.
    console.error("[vocal-remover] Rate limit check errored — allowing request through:", e);
    return { allowed: true, ...UNCONFIGURED_RESULT };
  }
}

/** Read-only peek at the remaining quota — does not consume a request. Used to show the hint on page load. */
export async function peekDailyLimit(ip: string): Promise<Omit<DailyLimitResult, "allowed">> {
  const ratelimit = getRatelimit();
  if (!ratelimit) {
    return UNCONFIGURED_RESULT;
  }

  try {
    const { remaining, limit } = await ratelimit.getRemaining(ip);
    return { remaining: Math.max(0, remaining), limit, configured: true };
  } catch (e) {
    console.error("[vocal-remover] Rate limit peek errored:", e);
    return UNCONFIGURED_RESULT;
  }
}
