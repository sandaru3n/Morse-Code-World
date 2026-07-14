import { NextRequest, NextResponse } from "next/server";
import { peekDailyLimit, getClientIp } from "@/lib/rateLimit";

export const runtime = "nodejs";
export const maxDuration = 15;

/**
 * Read-only quota check so the frontend can show "X of N left today" as soon
 * as the page loads, without consuming a request the way /api/separate does.
 */
export async function GET(req: NextRequest) {
  const ip = getClientIp(req);
  try {
    const quota = await peekDailyLimit(ip);
    return NextResponse.json(quota);
  } catch (e) {
    const message = e instanceof Error ? e.message : "Could not check quota.";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
