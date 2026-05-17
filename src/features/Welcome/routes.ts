import Routes from "../../core/constants/routes";
import type { RouteObject } from "react-router";
import AppPage from "../../core/layouts/AppPage";
import Welcome from "./views/Welcome";

const WelcomeRotues: RouteObject[] = [
  {
    path: Routes.HOME,
    Component: AppPage,
    children: [{ index: true, Component: Welcome }],
  },
];

export default WelcomeRotues;
