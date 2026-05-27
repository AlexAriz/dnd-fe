import type { RouteObject } from "react-router";

import { AppRoutes } from "Constants/routes";
import AppPage from "Layouts/AppPage/AppPage";
import Home from "Features/Home/views/Home";

const HomeRotues: RouteObject[] = [
  {
    path: AppRoutes.HOME,
    Component: AppPage,
    children: [{ index: true, Component: Home }],
  },
];

export default HomeRotues;
