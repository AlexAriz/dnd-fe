import type { RouteObject } from "react-router";

import { Modules } from "Constants/routes";
import AppPage from "Layouts/AppPage/AppPage";
import SpellList from "./views/SpellList";
import SPELL_PATHS from "./constants/paths";
import SpellPage from "./views/SpellPage";

const SpellsRotues: RouteObject[] = [
  {
    path: Modules.SPELLS,
    Component: AppPage,
    children: [
      { index: true, Component: SpellList },
      { path: SPELL_PATHS.DETAILS, Component: SpellPage },
    ],
  },
];

export default SpellsRotues;
