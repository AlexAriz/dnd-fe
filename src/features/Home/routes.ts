import Routes from "../../core/constants/routes";
import type { RouteObject } from "react-router";
import AppPage from "../../core/layouts/AppPage";
import Home from "./views/Home";

const HomeRotues: RouteObject[] = [
  {
    path: Routes.HOME,
    Component: AppPage,
    children: [{ index: true, Component: Home }],
  },
];

export default HomeRotues;
