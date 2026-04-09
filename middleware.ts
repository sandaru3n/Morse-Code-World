import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const CANONICAL = "https://morsecodeworld.org";
const CANONICAL_HOST = "morsecodeworld.org";

function hostname(request: NextRequest): string {
  const raw =
    request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? "";
  return raw.split(":")[0].toLowerCase();
}

function isLocalOrPreview(host: string): boolean {
  return (
    host === "localhost" ||
    host.startsWith("127.0.0.1") ||
    host.endsWith(".vercel.app")
  );
}

export function middleware(request: NextRequest) {
  const host = hostname(request);

  if (isLocalOrPreview(host)) {
    return NextResponse.next();
  }

  const proto = request.headers.get("x-forwarded-proto");
  const path = `${request.nextUrl.pathname}${request.nextUrl.search}`;

  if (host === `www.${CANONICAL_HOST}`) {
    return NextResponse.redirect(new URL(path, CANONICAL), 308);
  }

  if (host === CANONICAL_HOST && proto === "http") {
    return NextResponse.redirect(new URL(path, CANONICAL), 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"]
};
