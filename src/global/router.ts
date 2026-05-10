import { createBrowserRouter } from "react-router";
import AppPage from "../components/AppPage";
import Welcome from "../components/Welcome";
import Dummy from "../components/Dummy";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Routes from "../constants/routes";

export default createBrowserRouter([
  {
    path: Routes.Root,
    Component: AppPage,
    children: [
      { index: true, Component: Welcome },
      { path: Routes.Dummy, Component: Dummy },
    ],
  },
  {
    path: Routes.Login,
    Component: Login,
  },
  {
    path: Routes.Signup,
    Component: Signup,
  },
]);
