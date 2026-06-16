import type { RouteObject } from "react-router";

import { PublicRoutes } from "Constants/routes";
import PublicPage from "Layouts/PublicPage";
import Login from "./views/Login";
import Signup from "./views/Signup";

const AuthRoutes: RouteObject[] = [
  {
    path: PublicRoutes.LOGIN,
    Component: PublicPage,
    children: [{ index: true, Component: Login }],
  },
  {
    path: PublicRoutes.SIGNUP,
    Component: PublicPage,
    children: [{ index: true, Component: Signup }],
  },
];

export default AuthRoutes;
