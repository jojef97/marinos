import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "el"];
const defaultLocale = "en";

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language");
  if (!acceptLanguage) return defaultLocale;
  const parts=acceptLanguage.split(",");

   const languages = parts.map((part) => {
    const [tag, q] = part.split(";q=");
    return { lang: tag.split("-")[0], quality: q ? Number(q) : 1 };
  });

  languages.sort((a, b) => b.quality - a.quality);

  const match = languages.find((l) => locales.includes(l.lang));
  return match ? match.lang : defaultLocale;
}
    

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname already has a supported locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  if (pathnameHasLocale) return NextResponse.next();

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip internal paths, API routes, and files with extensions (like favicon.ico, images, etc.)
    "/((?!api|_next/static|_next/image|.*\\..*).*)"
  ],
};