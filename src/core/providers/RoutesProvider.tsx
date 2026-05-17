import router from "../../router";
import { RouterProvider } from "react-router";

function RoutesProvider() {
  return <RouterProvider router={router} />;
}

export default RoutesProvider;
