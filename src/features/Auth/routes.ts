import type { RouteObject } from "react-router";

import Routes from "Constants/routes";
import PublicPage from "Layouts/PublicPage";
import Login from "Features/Auth/views/Login";
import Signup from "Features/Auth/views/Signup";

const AuthRoutes: RouteObject[] = [
  {
    path: Routes.LOGIN,
    Component: PublicPage,
    children: [{ index: true, Component: Login }],
  },
  {
    path: Routes.SIGNUP,
    Component: PublicPage,
    children: [{ index: true, Component: Signup }],
  },
];

export default AuthRoutes;
