import Routes from "Constants/routes";
import type { RouteObject } from "react-router";
import PublicPage from "../../core/layouts/PublicPage";
import Login from "./views/Login";
import Signup from "./views/Signup";

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
