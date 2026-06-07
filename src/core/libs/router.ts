import { createBrowserRouter } from "react-router";
import HomeRotues from "Features/Home/routes";
import ProfileRoutes from "Features/Profile/routes";
import AuthRoutes from "Features/Auth/routes";
import SpellsRotues from "Features/Spells/routes";
import CharacterRoutes from "Features/Characters/routes";

export default createBrowserRouter([
  ...HomeRotues,
  ...ProfileRoutes,
  ...CharacterRoutes,
  ...SpellsRotues,
  ...AuthRoutes,
]);
