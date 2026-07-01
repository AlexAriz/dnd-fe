import type { PublicRoutes, HiddenPaths } from "Constants/routes";

export type AuthFlow = "login" | "signup";

export interface AuthFlowObject {
  submitButton: string;
  linkText: string;
  linkRoute: (typeof PublicRoutes)[keyof typeof PublicRoutes];
  redirectRoute: typeof HiddenPaths.ROOT | typeof PublicRoutes.LOGIN;
}
