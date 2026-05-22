import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { htmlDirForLocale, localeFromPathname } from "@/lib/localeFromPath";
import { isTrackingQueryParam } from "@/lib/trackingQueryParams";

function withLocaleHeaders(request: NextRequest) {
  const locale = localeFromPathname(request.nextUrl.pathname);
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", locale);
  requestHeaders.set("x-html-dir", htmlDirForLocale(locale));
  return requestHeaders;
}

/**
 * Permanently redirect URLs with marketing/tracking query params to the clean path.
 * Stops crawlers from treating ?ref=producthunt (etc.) as separate crawl targets.
 */
export function proxy(request: NextRequest) {
  const url = request.nextUrl;
  let removed = false;

  for (const key of [...url.searchParams.keys()]) {
    if (isTrackingQueryParam(key)) {
      url.searchParams.delete(key);
      removed = true;
    }
  }

  const requestHeaders = withLocaleHeaders(request);

  if (!removed) {
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon|.*\\..*).*)"]
};
