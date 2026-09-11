import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale } from "@/lib/i18n";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect admin routes (except login)
  if (pathname.startsWith("/admin")) {
    if (!pathname.startsWith("/admin/login")) {
      const token = request.cookies.get("admin_session")?.value;
      if (!token) {
        return NextResponse.redirect(new URL("/admin/login", request.url));
      }
    }
    return NextResponse.next();
  }

  // Skip api routes and static files
  if (pathname.startsWith("/api") || pathname.includes(".")) {
    return NextResponse.next();
  }

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Redirect to default locale
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

/**
 * Keep this matcher as narrow as possible: every path it matches costs one
 * billable Edge Request on Vercel, even when the proxy does nothing but call
 * `NextResponse.next()`.
 *
 * Excluded (the proxy was a no-op for all of them anyway):
 *   - `/mn` and `/en` prefixed paths — already localised, ~99% of all traffic
 *     (this also covers the `?_rsc=` navigation payloads for those routes)
 *   - `_next/*`, `/api/*` — internal routes
 *   - anything containing a dot — static files such as `/newLogo.png`
 *
 * Still matched, which is all the proxy actually needs:
 *   - `/admin/*`             → session guard
 *   - `/` and bare paths     → redirect to the default locale
 */
export const config = {
  matcher: [
    "/((?!mn/|en/|mn$|en$|_next|api/|favicon.ico|sitemap.xml|robots.txt|.*\\.).*)",
  ],
};
