import { NextRequest, NextResponse } from "next/server";
import { getReplicateClient, splitDemucsOutput, type DemucsOutput } from "@/lib/replicate";

export const runtime = "nodejs";
export const maxDuration = 30;

type Props = { params: Promise<{ id: string }> };

/**
 * Polled by the frontend every ~3 seconds while a separation job runs.
 * Returns the raw Replicate status plus the two stems already split into
 * friendly `vocals` / `instrumental` URLs once the job succeeds.
 */
export async function GET(_req: NextRequest, { params }: Props) {
  const { id } = await params;
  if (!id?.trim()) {
    return NextResponse.json({ error: "Missing prediction id." }, { status: 400 });
  }

  let replicate;
  try {
    replicate = getReplicateClient();
  } catch (e) {
    const message = e instanceof Error ? e.message : "Replicate is not configured.";
    return NextResponse.json({ error: message }, { status: 503 });
  }

  try {
    const prediction = await replicate.predictions.get(id);

    if (prediction.status === "failed" || prediction.status === "canceled") {
      return NextResponse.json({
        status: prediction.status,
        error: prediction.error ? String(prediction.error) : "Separation failed."
      });
    }

    if (prediction.status === "succeeded") {
      const { vocals, instrumental } = splitDemucsOutput(prediction.output as DemucsOutput);
      return NextResponse.json({
        status: prediction.status,
        output: { vocals, instrumental }
      });
    }

    return NextResponse.json({ status: prediction.status });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Failed to fetch job status.";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
