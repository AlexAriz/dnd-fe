export const AppRoutes = {
  HOME: "/",
  TEST: "/test",
} as const;

export const PublicRoutes = {
  LOGIN: "/login",
  SIGNUP: "/signup",
} as const;

const Routes = {
  ...AppRoutes,
  ...PublicRoutes,
} as const;

export default Routes;
