import type { RouteObject } from "react-router";

import Routes from "Constants/routes";
import PublicPage from "Layouts/PublicPage/PublicPage";
import Login from "Layouts/PublicPage/components/Login";
import Signup from "Layouts/PublicPage/components/Signup";

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
