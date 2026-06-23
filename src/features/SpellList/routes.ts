import type { RouteObject } from "react-router";

import { Modules } from "Constants/routes";
import AppPage from "Layouts/AppPage/AppPage";
import SpellList from "./views/SpellList";

const SpellsRotues: RouteObject[] = [
  {
    path: Modules.SPELLS,
    Component: AppPage,
    children: [{ index: true, Component: SpellList }],
  },
];

export default SpellsRotues;
