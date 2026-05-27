import type { RouteObject } from "react-router";

import { WelcomeRoutes } from "Constants/routes";
import AppPage from "Layouts/AppPage/AppPage";
import CompleteProfile from "Features/Profile/views/CompleteProfile";

const HomeRotues: RouteObject[] = [
  {
    path: WelcomeRoutes.PROFILE,
    Component: AppPage,
    children: [{ index: true, Component: CompleteProfile }],
  },
];

export default HomeRotues;
