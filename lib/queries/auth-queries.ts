import { loginWithEmail } from "@/lib/auth";

export const emailLoginMutation = {
  mutationFn: (vars: { email: string; password: string }) =>
    loginWithEmail(vars.email, vars.password),
};
