import { AppRoutes } from "Constants/routes";
import { useMatch } from "react-router";

const usePath = () => {
  const isHome = useMatch(AppRoutes.HOME);
  const isTest = useMatch(AppRoutes.TEST);

  let id: string;
  switch (true) {
    case !!isHome:
      id = "MODULE_HOME";
      break;
    case !!isTest:
      id = "MODULE_TEST";
      break;
    default:
      id = "MODULE_HOME";
      break;
  }

  return {
    id,
  };
};

export default usePath;
