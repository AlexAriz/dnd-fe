import { createBrowserRouter } from "react-router";
import AppPage from "../components/AppPage";
import Welcome from "../components/Welcome";
import Dummy from "../components/Dummy";
import Login from "../components/Login";

export default createBrowserRouter([
  {
    path: "/",
    Component: AppPage,
    children: [
      { index: true, Component: Welcome },
      { path: "dummy", Component: Dummy },
    ],
  },
  {
    path: "login",
    Component: Login,
  },
]);
