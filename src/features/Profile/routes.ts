import type { RouteObject } from "react-router";

import { HiddenPaths } from "Constants/routes";
import AppPage from "Layouts/AppPage/AppPage";
import CompleteProfile from "Features/Profile/views/CompleteProfile";

const HomeRotues: RouteObject[] = [
  {
    path: HiddenPaths.PROFILE,
    Component: AppPage,
    children: [{ index: true, Component: CompleteProfile }],
  },
];

export default HomeRotues;
