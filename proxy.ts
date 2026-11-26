import { NextRequest, NextResponse } from "next/server.js";

/**
 * Public maintenance switch.
 *
 * Set ERS_MAINTENANCE_MODE=true in the Vercel Production environment to
 * serve the temporary maintenance response to public website routes.
 * Admin pages, API routes, and Next.js/static assets remain available.
 */
export function proxy(request: NextRequest) {
  if (process.env.ERS_MAINTENANCE_MODE !== "true") {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  // Keep the internal maintenance endpoint, admin operations, API routes,
  // and framework/static assets available while the public site is offline.
  if (
    pathname === "/maintenance" ||
    pathname === "/admin" ||
    pathname.startsWith("/admin/") ||
    pathname === "/api" ||
    pathname.startsWith("/api/") ||
    pathname.startsWith("/_next/") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname === "/ers-logo.svg"
  ) {
    return NextResponse.next();
  }

  const destination = request.nextUrl.clone();
  destination.pathname = "/maintenance";
  destination.search = "";

  return NextResponse.rewrite(destination);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
};
