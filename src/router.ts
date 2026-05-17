import { createBrowserRouter } from "react-router";
import WelcomeRotues from "Features/Welcome/routes";
import TestRoutes from "Features/Test/routes";
import AuthRoutes from "Features/Auth/routes";

export default createBrowserRouter([...WelcomeRotues, ...TestRoutes, ...AuthRoutes]);
