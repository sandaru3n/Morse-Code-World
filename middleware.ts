import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const APEX = "https://morsecodeworld.org";
const WWW_HOST = "www.morsecodeworld.org";

function hostname(request: NextRequest): string {
  const raw =
    request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? "";
  return raw.split(",")[0]?.trim().split(":")[0].toLowerCase() ?? "";
}

export function middleware(request: NextRequest) {
  const host = hostname(request);

  if (
    host === "localhost" ||
    host.startsWith("127.0.0.1") ||
    host.endsWith(".vercel.app")
  ) {
    return NextResponse.next();
  }

  if (host === WWW_HOST) {
    const path = `${request.nextUrl.pathname}${request.nextUrl.search}`;
    return NextResponse.redirect(new URL(path, APEX), 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"]
};
