import { AppRoutes } from "Constants/routes";
import AppPage from "Layouts/AppPage/AppPage";
import type { RouteObject } from "react-router";
import CharacterList from "./views/CharacterList";

const CharacterRoutes: RouteObject[] = [
  {
    path: AppRoutes.CHARACTERS,
    Component: AppPage,
    children: [
      { index: true, Component: CharacterList },
      // { path: CHARACTER_PATHS.CREATE, Component: NewCharacterPage },
      // { path: CHARACTER_PATHS.DETAILS, Component: CharacterPage },
    ],
  },
];

export default CharacterRoutes;
