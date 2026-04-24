import { NextResponse } from "next/server";
import { signSession, timingSafeEqual, SESSION_CONFIG } from "@/lib/auth";

export async function POST(request: Request) {
  const password = process.env.DASHBOARD_PASSWORD;
  if (!password) {
    return NextResponse.json(
      { ok: false, error: "Server misconfigured" },
      { status: 500 },
    );
  }

  let body: { password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Bad request" }, { status: 400 });
  }

  const submitted = body.password ?? "";
  if (!timingSafeEqual(submitted, password)) {
    return NextResponse.json({ ok: false, error: "ACCESS DENIED" }, { status: 401 });
  }

  const token = await signSession();

  const response = NextResponse.json({ ok: true });
  response.cookies.set({
    name: SESSION_CONFIG.cookieName,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_CONFIG.maxAgeSeconds,
  });
  return response;
}
