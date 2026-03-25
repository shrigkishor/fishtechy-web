import { randomBytes } from "node:crypto";

const STATE_COOKIE = "ft_google_oauth_state";
const PENDING_COOKIE = "ft_google_oauth_pending";

export const GOOGLE_OAUTH_STATE_MAX_AGE = 600;
export const GOOGLE_OAUTH_PENDING_MAX_AGE = 120;

export function getAppBaseUrl() {
  const base = process.env.NEXTAUTH_URL ?? "http://localhost:3000";
  return base.replace(/\/$/, "");
}

export function getGoogleOAuthRedirectUri() {
  return `${getAppBaseUrl()}/api/auth/google/callback`;
}

export function getGoogleClientCredentials() {
  const clientId =
    process.env.GOOGLE_CLIENT_ID?.trim() ||
    process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID?.trim();
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET?.trim();
  return { clientId, clientSecret };
}

export function getApiBaseUrl() {
  return process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") ?? "https://api-dev.flytechy.site";
}

export function createOAuthState() {
  return randomBytes(24).toString("hex");
}

export { STATE_COOKIE, PENDING_COOKIE };
