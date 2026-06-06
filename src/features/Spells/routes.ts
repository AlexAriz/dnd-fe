import type { RouteObject } from "react-router";

import { AppRoutes } from "Constants/routes";
import AppPage from "Layouts/AppPage/AppPage";
import Spells from "Features/Spells/views/Spells";

const SpellsRotues: RouteObject[] = [
  {
    path: AppRoutes.SPELLS,
    Component: AppPage,
    children: [{ index: true, Component: Spells }],
  },
];

export default SpellsRotues;
