import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifySession, SESSION_CONFIG } from "./lib/auth";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Public paths — login page, login/logout APIs, and the auth-required fallback
  const isPublic =
    pathname === "/login" ||
    pathname === "/api/login" ||
    pathname === "/api/logout";

  if (isPublic) {
    return NextResponse.next();
  }

  const token = request.cookies.get(SESSION_CONFIG.cookieName)?.value;
  const authed = await verifySession(token);

  if (!authed) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  // Run on all paths except Next internals and static assets
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
