/** Full navigation so auth state and RQ cache reset cleanly after session loss. */
export function redirectToLoginPage() {
  if (typeof window === "undefined") return;
  window.location.assign("/");
}
