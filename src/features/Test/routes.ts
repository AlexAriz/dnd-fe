import type { RouteObject } from "react-router";

import Routes from "Constants/routes";
import AppPage from "Layouts/AppPage/AppPage";
import Test from "Features/Test/views/Test";

const TestRoutes: RouteObject[] = [
  {
    path: Routes.TEST,
    Component: AppPage,
    children: [{ index: true, Component: Test }],
  },
];

export default TestRoutes;
