import Routes from "../../core/constants/routes";
import type { RouteObject } from "react-router";
import AppPage from "../../core/layouts/AppPage";
import Test from "./views/Test";

const TestRoutes: RouteObject[] = [
  {
    path: Routes.TEST,
    Component: AppPage,
    children: [{ index: true, Component: Test }],
  },
];

export default TestRoutes;
