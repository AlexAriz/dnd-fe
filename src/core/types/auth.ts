import type { PublicRoutes } from "Constants/routes";

export type AuthFlow = "login" | "signup";

export interface AuthFlowObject {
  submitButton: string;
  linkText: string;
  linkRoute: (typeof PublicRoutes)[keyof typeof PublicRoutes];
  errorMessage: string;
}
