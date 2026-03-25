import axios, { type AxiosError, type InternalAxiosRequestConfig } from "axios";
import { redirectToLoginPage } from "./auth-navigation";
import { clearAuth, getAccessToken, getRefreshToken, setAccessToken, setRefreshToken } from "./auth-tokens";
import { normalizeAuthTokens } from "./auth-utils";

const API_BASE = (process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://api-dev.flytechy.site").replace(/\/$/, "");

const JSON_HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
} as const;

/** Unauthenticated JSON client (login, Google, etc.). */
export const publicApi = axios.create({
  baseURL: API_BASE,
  headers: JSON_HEADERS,
});

let refreshPromise: Promise<{ access_token: string; refresh_token: string }> | null = null;

export async function refreshAccessTokens(): Promise<{ access_token: string; refresh_token: string }> {
  const rt = getRefreshToken();
  if (!rt) {
    clearAuth();
    redirectToLoginPage();
    throw new Error("No refresh token");
  }
  try {
    const { data } = await axios.get(`${API_BASE}/auth/refresh-token`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${rt.trim()}`,
      },
    });
    const tokens = normalizeAuthTokens(data);
    setAccessToken(tokens.access_token);
    setRefreshToken(tokens.refresh_token);
    return tokens;
  } catch {
    clearAuth();
    redirectToLoginPage();
    throw new Error("Token refresh failed");
  }
}

export function refreshAccessTokensDeduped() {
  if (!refreshPromise) {
    refreshPromise = refreshAccessTokens().finally(() => {
      refreshPromise = null;
    });
  }
  return refreshPromise;
}

export const api = axios.create({
  baseURL: API_BASE,
  headers: JSON_HEADERS,
});

api.interceptors.request.use((config) => {
  const override = config.accessTokenOverride?.trim();
  if (override) {
    config.headers.set("Authorization", `Bearer ${override}`);
    config.skipRefreshOn401 = true;
  } else {
    const t = getAccessToken()?.trim();
    if (t) config.headers.set("Authorization", `Bearer ${t}`);
  }
  delete config.accessTokenOverride;
  return config;
});

api.interceptors.response.use(
  (r) => r,
  async (error: AxiosError) => {
    const original = error.config as InternalAxiosRequestConfig | undefined;
    if (!original || error.response?.status !== 401) return Promise.reject(error);
    if (original._retry || original.skipRefreshOn401) return Promise.reject(error);
    if (!getRefreshToken()) {
      clearAuth();
      redirectToLoginPage();
      return Promise.reject(error);
    }

    original._retry = true;
    try {
      await refreshAccessTokensDeduped();
      const token = getAccessToken()?.trim();
      if (token) original.headers.set("Authorization", `Bearer ${token}`);
      return api(original);
    } catch {
      redirectToLoginPage();
      return Promise.reject(error);
    }
  },
);
