import { Modules } from "Constants/routes";
import AppPage from "Layouts/AppPage/AppPage";
import type { RouteObject } from "react-router";
import CharacterList from "./views/CharacterList";
import CharacterDetail from "./views/CharacterPage";
import CHARACTER_PATHS from "./constants/paths";
import NewCharacterPage from "./views/NewCharacterPage";

const CharacterRoutes: RouteObject[] = [
  {
    path: Modules.CHARACTERS,
    Component: AppPage,
    children: [
      { index: true, Component: CharacterList },
      { path: CHARACTER_PATHS.CREATE, Component: NewCharacterPage },
      { path: CHARACTER_PATHS.DETAILS, Component: CharacterDetail },
    ],
  },
];

export default CharacterRoutes;
