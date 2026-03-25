import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { normalizeAuthTokens } from "@/lib/auth-utils";
import {
  GOOGLE_OAUTH_PENDING_MAX_AGE,
  getApiBaseUrl,
  getAppBaseUrl,
  getGoogleClientCredentials,
  getGoogleOAuthRedirectUri,
  PENDING_COOKIE,
  STATE_COOKIE,
} from "@/lib/google-oauth-server";

function failRedirect(message: string) {
  const base = getAppBaseUrl();
  return NextResponse.redirect(`${base}/?google_error=${encodeURIComponent(message)}`);
}

export async function GET(request: NextRequest) {
  const url = request.nextUrl;
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const oauthError = url.searchParams.get("error");

  const jar = await cookies();
  const expectedState = jar.get(STATE_COOKIE)?.value;
  jar.delete(STATE_COOKIE);

  if (oauthError) {
    return failRedirect(oauthError);
  }
  if (!code || !state || !expectedState || state !== expectedState) {
    return failRedirect("invalid_state");
  }

  const { clientId, clientSecret } = getGoogleClientCredentials();
  if (!clientId || !clientSecret) {
    return failRedirect("missing_google_credentials");
  }

  const redirectUri = getGoogleOAuthRedirectUri();
  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      grant_type: "authorization_code",
    }),
  });

  const tokenJson = (await tokenRes.json()) as Record<string, unknown>;
  if (!tokenRes.ok) {
    const desc = typeof tokenJson.error_description === "string" ? tokenJson.error_description : "token_exchange_failed";
    return failRedirect(desc);
  }

  const googleAccess =
    (typeof tokenJson.access_token === "string" && tokenJson.access_token) ||
    (typeof tokenJson.id_token === "string" && tokenJson.id_token) ||
    "";
  if (!googleAccess) {
    return failRedirect("no_google_token");
  }

  const apiBase = getApiBaseUrl();
  const backendRes = await fetch(`${apiBase}/auth/google`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ token: googleAccess }),
  });

  const backendBody: unknown = await backendRes.json().catch(() => null);
  if (!backendRes.ok) {
    const msg =
      backendBody && typeof backendBody === "object" && "message" in backendBody
        ? String((backendBody as { message?: string }).message ?? "backend_auth_failed")
        : "backend_auth_failed";
    return failRedirect(msg);
  }

  let tokens: { access_token: string; refresh_token: string };
  try {
    tokens = normalizeAuthTokens(backendBody);
  } catch {
    return failRedirect("invalid_backend_tokens");
  }

  jar.set(PENDING_COOKIE, JSON.stringify(tokens), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: GOOGLE_OAUTH_PENDING_MAX_AGE,
    path: "/",
  });

  return NextResponse.redirect(`${getAppBaseUrl()}/auth/google/complete`);
}
