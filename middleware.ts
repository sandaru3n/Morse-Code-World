import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isTrackingQueryParam } from "@/lib/trackingQueryParams";

/**
 * Permanently redirect URLs with marketing/tracking query params to the clean path.
 * Stops Google from treating ?ref=producthunt (etc.) as separate crawl targets.
 */
export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  let removed = false;

  for (const key of [...url.searchParams.keys()]) {
    if (isTrackingQueryParam(key)) {
      url.searchParams.delete(key);
      removed = true;
    }
  }

  if (!removed) {
    return NextResponse.next();
  }

  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon|.*\\..*).*)"]
};
