import type { RouteObject } from "react-router";

import { AppRoutes } from "Constants/routes";
import AppPage from "Layouts/AppPage/AppPage";
import SpellList from "Features/Spells/views/SpellList";

const SpellsRotues: RouteObject[] = [
  {
    path: AppRoutes.SPELLS,
    Component: AppPage,
    children: [{ index: true, Component: SpellList }],
  },
];

export default SpellsRotues;
