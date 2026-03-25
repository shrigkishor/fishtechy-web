let accessToken: string | null = null;

const REFRESH_KEY = "ft_rt";

export function getAccessToken() {
  return accessToken;
}

export function setAccessToken(token: string | null) {
  accessToken = token;
}

export function getRefreshToken(): string | null {
  if (typeof window === "undefined") return null;
  return sessionStorage.getItem(REFRESH_KEY);
}

export function setRefreshToken(token: string | null) {
  if (typeof window === "undefined") return;
  if (token) sessionStorage.setItem(REFRESH_KEY, token);
  else sessionStorage.removeItem(REFRESH_KEY);
}

export function clearAuth() {
  accessToken = null;
  if (typeof window !== "undefined") sessionStorage.removeItem(REFRESH_KEY);
}
