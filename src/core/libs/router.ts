import { createBrowserRouter } from "react-router";
import HomeRotues from "Features/Home/routes";
import TestRoutes from "Features/Test/routes";
import AuthRoutes from "Features/Auth/routes";

export default createBrowserRouter([...HomeRotues, ...TestRoutes, ...AuthRoutes]);
