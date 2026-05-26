import { useMatch } from "react-router";

import { AppRoutes } from "Constants/routes";
import type { PathMap } from "Types/paths";

const usePath = (): PathMap => {
  const isHome = useMatch(AppRoutes.HOME);
  const isTest = useMatch(AppRoutes.TEST);
  const isProfile = useMatch(AppRoutes.PROFILE);

  switch (true) {
    case !!isHome:
      return {
        id: "MODULE_HOME",
        currentPath: AppRoutes.HOME,
      };
    case !!isTest:
      return {
        id: "MODULE_TEST",
        currentPath: AppRoutes.TEST,
      };
    case !!isProfile:
      return {
        id: "MODULE_PROFILE",
        currentPath: AppRoutes.PROFILE,
      };
    default:
      return {
        id: "MODULE_HOME",
        currentPath: AppRoutes.HOME,
      };
  }
};

export default usePath;
