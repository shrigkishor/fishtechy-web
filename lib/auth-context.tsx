"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import {
  type AuthUser,
  clearAuth,
  fetchCurrentUser,
  getRefreshToken,
  refreshTokens,
  setAccessToken,
  setRefreshToken,
} from "./auth";
import { redirectToLoginPage } from "./auth-navigation";
import { queryKeys } from "./query-keys";

type AuthState = {
  user: AuthUser | null;
  loading: boolean;
  isAuthenticated: boolean;
  login: (accessToken: string, refreshToken: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const queryClient = useQueryClient();
  const [bootstrapDone, setBootstrapDone] = useState(false);
  const [sessionReady, setSessionReady] = useState(false);
  const refreshTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const scheduleRefresh = useCallback(() => {
    if (refreshTimer.current) clearTimeout(refreshTimer.current);
    refreshTimer.current = setTimeout(async () => {
      try {
        const tokens = await refreshTokens();
        setAccessToken(tokens.access_token);
        setRefreshToken(tokens.refresh_token);
        scheduleRefresh();
      } catch {
        queryClient.removeQueries({ queryKey: queryKeys.me });
        setSessionReady(false);
        redirectToLoginPage();
      }
    }, 14 * 60 * 1000);
  }, [queryClient]);

  useEffect(() => {
    let cancelled = false;
    async function restore() {
      const rt = getRefreshToken();
      if (!rt) {
        setBootstrapDone(true);
        return;
      }
      try {
        const tokens = await refreshTokens();
        if (cancelled) return;
        setAccessToken(tokens.access_token);
        setRefreshToken(tokens.refresh_token);
        setSessionReady(true);
        scheduleRefresh();
      } catch {
        if (!cancelled) {
          clearAuth();
          redirectToLoginPage();
        }
      } finally {
        if (!cancelled) setBootstrapDone(true);
      }
    }
    restore();
    return () => {
      cancelled = true;
      if (refreshTimer.current) clearTimeout(refreshTimer.current);
    };
  }, [scheduleRefresh]);

  const { data: user = null, isPending, isError } = useQuery({
    queryKey: queryKeys.me,
    queryFn: () => fetchCurrentUser(),
    enabled: bootstrapDone && sessionReady,
    retry: false,
    staleTime: 5 * 60 * 1000,
  });

  useEffect(() => {
    if (!isError) return;
    clearAuth();
    setSessionReady(false);
    queryClient.removeQueries({ queryKey: queryKeys.me });
  }, [isError, queryClient]);

  const login = useCallback(
    async (at: string, rt: string) => {
      setAccessToken(at);
      setRefreshToken(rt);
      setSessionReady(true);
      await queryClient.invalidateQueries({ queryKey: queryKeys.me });
      scheduleRefresh();
    },
    [queryClient, scheduleRefresh],
  );

  const logout = useCallback(() => {
    clearAuth();
    setSessionReady(false);
    queryClient.removeQueries({ queryKey: queryKeys.me });
    if (refreshTimer.current) clearTimeout(refreshTimer.current);
  }, [queryClient]);

  const loading = !bootstrapDone || (sessionReady && isPending);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated: sessionReady && !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
