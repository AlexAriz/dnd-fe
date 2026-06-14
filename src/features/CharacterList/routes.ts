import { Modules } from "Constants/routes";
import AppPage from "Layouts/AppPage/AppPage";
import type { RouteObject } from "react-router";
import CharacterList from "./views/CharacterList";

const CharacterRoutes: RouteObject[] = [
  {
    path: Modules.CHARACTERS,
    Component: AppPage,
    children: [{ index: true, Component: CharacterList }],
  },
];

export default CharacterRoutes;
