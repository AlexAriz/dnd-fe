import { createBrowserRouter } from "react-router";
import HomeRotues from "Features/Home/routes";
import ProfileRoutes from "Features/Profile/routes";
import AuthRoutes from "Features/Auth/routes";

export default createBrowserRouter([...HomeRotues, ...ProfileRoutes, ...AuthRoutes]);
