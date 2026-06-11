import { createBrowserRouter, redirect } from "react-router";
import ProfileRoutes from "Features/Profile/routes";
import AuthRoutes from "Features/Auth/routes";
import SpellsRotues from "Features/Spells/routes";
import CharacterRoutes from "Features/Characters/routes";
import CreateCharacterRoutes from "Features/CreateCharacter/routes";
import CharacterDetailsRoutes from "Features/CharacterDetails/routes";
import { HiddenPaths, Modules } from "Constants/routes";

export default createBrowserRouter([
  {
    path: HiddenPaths.ROOT,
    children: [
      {
        index: true,
        loader: () => redirect(Modules.CHARACTERS),
      },
    ],
  },
  ...ProfileRoutes,
  ...CharacterRoutes,
  ...CreateCharacterRoutes,
  ...CharacterDetailsRoutes,
  ...SpellsRotues,
  ...AuthRoutes,
]);
