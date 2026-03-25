"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth-context";

export default function GoogleOAuthCompletePage() {
  const { login } = useAuth();
  const router = useRouter();
  const [message, setMessage] = useState("Signing you in…");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/auth/google/consume", { credentials: "include" });
        if (!res.ok) {
          if (!cancelled) {
            setMessage("Could not complete sign-in. Try again.");
            router.replace("/?google_error=consume_failed");
          }
          return;
        }
        const body = (await res.json()) as { access_token: string; refresh_token: string };
        await login(body.access_token, body.refresh_token);
        if (!cancelled) router.replace("/feed");
      } catch {
        if (!cancelled) router.replace("/?google_error=consume_failed");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [login, router]);

  return (
    <div className="flex min-h-svh items-center justify-center bg-background px-6">
      <p className="font-display text-center text-lg text-foreground">{message}</p>
    </div>
  );
}
