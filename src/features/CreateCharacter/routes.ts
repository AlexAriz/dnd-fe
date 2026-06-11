import { CHARACTER_PATHS, Modules } from "Constants/routes";
import AppPage from "Layouts/AppPage/AppPage";
import type { RouteObject } from "react-router";
import NewCharacterPage from "./views/NewCharacterPage";

const CharacterRoutes: RouteObject[] = [
  {
    path: Modules.CHARACTERS,
    Component: AppPage,
    children: [{ path: CHARACTER_PATHS.CREATE, Component: NewCharacterPage }],
  },
];

export default CharacterRoutes;
