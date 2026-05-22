import type { RouteObject } from "react-router";

import Routes from "Constants/routes";
import AppPage from "Layouts/AppPage/AppPage";
import Home from "Features/Home/views/Home";

const HomeRotues: RouteObject[] = [
  {
    path: Routes.HOME,
    Component: AppPage,
    children: [{ index: true, Component: Home }],
  },
];

export default HomeRotues;
