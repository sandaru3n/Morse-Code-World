import { NextRequest, NextResponse } from "next/server";
import { DEMUCS_MODEL_VERSION, getReplicateClient } from "@/lib/replicate";
import { checkDailyLimit, getClientIp } from "@/lib/rateLimit";

export const runtime = "nodejs";
export const maxDuration = 30;

/**
 * Starts a Demucs vocal-separation job on Replicate and returns immediately
 * with the prediction id. Separation itself takes 1-3 minutes, far longer than
 * a serverless function is allowed to run, so the frontend polls /api/status/[id]
 * instead of waiting here.
 */
export async function POST(req: NextRequest) {
  const ip = getClientIp(req);
  const rate = await checkDailyLimit(ip);
  if (!rate.allowed) {
    return NextResponse.json(
      {
        error: `Daily limit reached (${rate.limit} vocal separations per IP per day). Please try again tomorrow.`,
        code: "RATE_LIMITED",
        remaining: 0,
        limit: rate.limit
      },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const audioUrl = typeof (body as { audioUrl?: unknown })?.audioUrl === "string"
    ? (body as { audioUrl: string }).audioUrl.trim()
    : "";

  if (!audioUrl) {
    return NextResponse.json({ error: "Missing audioUrl." }, { status: 400 });
  }

  let replicate;
  try {
    replicate = getReplicateClient();
  } catch (e) {
    const message = e instanceof Error ? e.message : "Replicate is not configured.";
    return NextResponse.json({ error: message }, { status: 503 });
  }

  try {
    const prediction = await replicate.predictions.create({
      version: DEMUCS_MODEL_VERSION,
      input: {
        audio: audioUrl,
        // The deployed cjwbw/demucs schema exposes this as `stem` (choices:
        // vocals/bass/drums/guitar/piano/other), not `two_stems` — setting it
        // to "vocals" is the API equivalent of the CLI's `--two-stems=vocals`.
        stem: "vocals",
        output_format: "mp3"
      }
    });

    return NextResponse.json({
      id: prediction.id,
      status: prediction.status,
      remaining: rate.remaining,
      limit: rate.limit
    });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Failed to start separation job.";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
