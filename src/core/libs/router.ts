import { createBrowserRouter } from "react-router";
import HomeRotues from "Features/Home/routes";
import TestRoutes from "Features/Test/routes";
import AuthRoutes from "Layouts/PublicPage/routes";

export default createBrowserRouter([...HomeRotues, ...TestRoutes, ...AuthRoutes]);
