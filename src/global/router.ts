import { createBrowserRouter } from "react-router";
import AppPage from "../components/AppPage";
import Welcome from "../components/Welcome";
import Test from "../components/Test";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Routes from "../constants/routes";

export default createBrowserRouter([
  {
    path: Routes.HOME,
    Component: AppPage,
    children: [
      { index: true, Component: Welcome },
      { path: Routes.TEST, Component: Test },
    ],
  },
  {
    path: Routes.LOGIN,
    Component: Login,
  },
  {
    path: Routes.SIGNUP,
    Component: Signup,
  },
]);
