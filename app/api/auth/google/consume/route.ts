import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { PENDING_COOKIE } from "@/lib/google-oauth-server";

export async function GET() {
  const jar = await cookies();
  const raw = jar.get(PENDING_COOKIE)?.value;
  jar.delete(PENDING_COOKIE);

  if (!raw) {
    return NextResponse.json({ error: "no_pending_session" }, { status: 400 });
  }

  try {
    const data = JSON.parse(raw) as { access_token?: string; refresh_token?: string };
    if (typeof data.access_token !== "string" || typeof data.refresh_token !== "string") {
      return NextResponse.json({ error: "invalid_payload" }, { status: 400 });
    }
    return NextResponse.json({
      access_token: data.access_token,
      refresh_token: data.refresh_token,
    });
  } catch {
    return NextResponse.json({ error: "invalid_payload" }, { status: 400 });
  }
}
