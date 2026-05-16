import { createBrowserRouter } from "react-router";
import AppPage from "Components/AppPage";
import Welcome from "Components/Welcome";
import Test from "Components/Test";
import Login from "Components/Login";
import Signup from "Components/Signup";
import Routes from "Constants/routes";

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
