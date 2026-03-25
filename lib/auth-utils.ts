/** API may return snake_case or camelCase token fields */
export function normalizeAuthTokens(data: unknown): { access_token: string; refresh_token: string } {
  if (!data || typeof data !== "object") throw new Error("Invalid auth response");
  const d = data as Record<string, unknown>;
  const access =
    (typeof d.access_token === "string" && d.access_token) ||
    (typeof d.accessToken === "string" && d.accessToken) ||
    "";
  const refresh =
    (typeof d.refresh_token === "string" && d.refresh_token) ||
    (typeof d.refreshToken === "string" && d.refreshToken) ||
    "";
  if (!access || !refresh) throw new Error("Invalid auth response: missing tokens");
  return { access_token: access, refresh_token: refresh };
}

export function getAxiosErrorMessage(error: unknown, fallback: string): string {
  if (typeof error === "object" && error !== null && "response" in error) {
    const res = (error as { response?: { data?: { message?: string } } }).response;
    const msg = res?.data?.message;
    if (typeof msg === "string" && msg) return msg;
  }
  if (error instanceof Error) return error.message;
  return fallback;
}
