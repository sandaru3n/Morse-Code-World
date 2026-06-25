import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { shouldIndexLocale } from "@/lib/i18n/localeIndexing";
import { htmlDirForLocale, localeFromPathname } from "@/lib/localeFromPath";
import { isTrackingQueryParam } from "@/lib/trackingQueryParams";

function withLocaleHeaders(request: NextRequest) {
  const locale = localeFromPathname(request.nextUrl.pathname);
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", locale);
  requestHeaders.set("x-html-dir", htmlDirForLocale(locale));
  return requestHeaders;
}

function indexNowKeyResponse(request: NextRequest): NextResponse | null {
  const indexNowKey = process.env.INDEXNOW_KEY?.trim();
  if (!indexNowKey) return null;

  const pathname = request.nextUrl.pathname;
  if (pathname !== `/${indexNowKey}.txt`) return null;

  return new NextResponse(indexNowKey, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400"
    }
  });
}

function applyLocaleIndexingHeaders(response: NextResponse, locale: ReturnType<typeof localeFromPathname>) {
  if (!shouldIndexLocale(locale)) {
    response.headers.set("X-Robots-Tag", "noindex, follow");
  }
  return response;
}

/**
 * Permanently redirect URLs with marketing/tracking query params to the clean path.
 * Stops crawlers from treating ?ref=producthunt (etc.) as separate crawl targets.
 */
export function proxy(request: NextRequest) {
  const keyResponse = indexNowKeyResponse(request);
  if (keyResponse) return keyResponse;

  const url = request.nextUrl;
  let removed = false;

  for (const key of [...url.searchParams.keys()]) {
    if (isTrackingQueryParam(key)) {
      url.searchParams.delete(key);
      removed = true;
    }
  }

  const requestHeaders = withLocaleHeaders(request);
  const locale = localeFromPathname(request.nextUrl.pathname);

  if (!removed) {
    return applyLocaleIndexingHeaders(
      NextResponse.next({ request: { headers: requestHeaders } }),
      locale
    );
  }

  return applyLocaleIndexingHeaders(NextResponse.redirect(url, 308), locale);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon|.*\\..*).*)",
    // IndexNow key file: /{INDEXNOW_KEY}.txt (runtime env, no rebuild required)
    "/:indexNowKey.txt"
  ]
};
