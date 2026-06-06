import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { password } = await req.json();

    if (!password) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    const hash = process.env.ADMIN_PASSWORD_HASH;

    if (!hash) {
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    const valid = await bcrypt.compare(password, hash);

    if (!valid) {
      return NextResponse.json({ ok: false }, { status: 401 });
    }

    const res = NextResponse.json({ ok: true });

    // 🍪 Set secure cookie
    res.cookies.set("admin_auth", "true", {
      httpOnly: true,
      secure: true,
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
    });

    return res;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}