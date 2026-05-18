import type { PublicRoutes } from "Constants/routes";

export type Flow = "login" | "signup";

export interface FlowObject {
  submitButton: string;
  linkText: string;
  linkRoute: (typeof PublicRoutes)[keyof typeof PublicRoutes];
  errorMessage: string;
}
