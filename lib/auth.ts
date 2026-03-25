export {
  getAccessToken,
  setAccessToken,
  getRefreshToken,
  setRefreshToken,
  clearAuth,
} from "./auth-tokens";

export { normalizeAuthTokens } from "./auth-utils";

import { api, publicApi, refreshAccessTokensDeduped } from "./api";
import { getAccessToken } from "./auth-tokens";
import { getAxiosErrorMessage, normalizeAuthTokens } from "./auth-utils";

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role?: string;
  [key: string]: unknown;
};

export async function loginWithEmail(email: string, password: string) {
  try {
    const { data } = await publicApi.post("/auth/login", { email, password });
    return normalizeAuthTokens(data);
  } catch (e) {
    throw new Error(getAxiosErrorMessage(e, "Login failed"));
  }
}

export const refreshTokens = refreshAccessTokensDeduped;

export async function fetchCurrentUser(accessTokenForRequest?: string): Promise<AuthUser> {
  const explicit = accessTokenForRequest?.trim();
  if (!explicit && !getAccessToken()?.trim()) throw new Error("No access token");
  try {
    const res = await api.get<AuthUser>(
      "/users/me",
      explicit ? { accessTokenOverride: explicit } : {},
    );
    return res.data;
  } catch (e) {
    throw new Error(getAxiosErrorMessage(e, "Failed to fetch user"));
  }
}
