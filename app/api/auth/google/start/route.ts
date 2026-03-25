import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import {
  GOOGLE_OAUTH_STATE_MAX_AGE,
  createOAuthState,
  getGoogleClientCredentials,
  getGoogleOAuthRedirectUri,
  STATE_COOKIE,
} from "@/lib/google-oauth-server";

export async function GET() {
  const { clientId } = getGoogleClientCredentials();
  if (!clientId) {
    return new NextResponse("Missing GOOGLE_CLIENT_ID (or NEXT_PUBLIC_GOOGLE_CLIENT_ID)", { status: 500 });
  }

  const state = createOAuthState();
  const jar = await cookies();
  jar.set(STATE_COOKIE, state, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: GOOGLE_OAUTH_STATE_MAX_AGE,
    path: "/",
  });

  const redirectUri = getGoogleOAuthRedirectUri();
  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: "code",
    scope: ["openid", "email", "profile"].join(" "),
    state,
    access_type: "online",
    prompt: "select_account",
  });

  return NextResponse.redirect(`https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`);
}
