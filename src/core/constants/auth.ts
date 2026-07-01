import { HiddenPaths, PublicRoutes } from "Constants/routes";
import type { AuthFlow, AuthFlowObject } from "Types/auth";

export const SUPABASE_URL: string = import.meta.env.VITE_SUPABASE_URL;
export const SUPABASE_PUBLISHABLE_KEY: string = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const AUTH_FLOW_MAP: Readonly<Record<AuthFlow, AuthFlowObject>> = {
  login: {
    submitButton: "LOGIN",
    linkText: "SIGNUP",
    linkRoute: PublicRoutes.SIGNUP,
    redirectRoute: HiddenPaths.ROOT,
  },
  signup: {
    submitButton: "SIGNUP",
    linkText: "LOGIN",
    linkRoute: PublicRoutes.LOGIN,
    redirectRoute: PublicRoutes.LOGIN,
  },
};
