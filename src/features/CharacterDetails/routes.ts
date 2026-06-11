import { CHARACTER_PATHS, Modules } from "Constants/routes";
import AppPage from "Layouts/AppPage/AppPage";
import type { RouteObject } from "react-router";
import CharacterDetail from "./view/CharacterPage";

const CharacterRoutes: RouteObject[] = [
  {
    path: Modules.CHARACTERS,
    Component: AppPage,
    children: [{ path: CHARACTER_PATHS.DETAILS, Component: CharacterDetail }],
  },
];

export default CharacterRoutes;
