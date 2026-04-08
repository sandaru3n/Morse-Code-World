import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const CANONICAL_ORIGIN = "https://morsecodeworld.org";
const APEX_HOST = "morsecodeworld.org";
const WWW_HOST = `www.${APEX_HOST}`;

export function middleware(request: NextRequest) {
  const rawHost = request.headers.get("host") ?? "";
  const host = rawHost.split(":")[0]?.toLowerCase() ?? "";

  const isApex = host === APEX_HOST;
  const isWww = host === WWW_HOST;
  if (!isApex && !isWww) {
    return NextResponse.next();
  }

  const forwardedProto = request.headers.get("x-forwarded-proto");
  const proto =
    forwardedProto ??
    (request.nextUrl.protocol === "https:" ? "https" : "http");

  const path = `${request.nextUrl.pathname}${request.nextUrl.search}`;
  const needsRedirect = isWww || proto !== "https";

  if (needsRedirect) {
    return NextResponse.redirect(`${CANONICAL_ORIGIN}${path}`, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2?)$).*)"
  ]
};
