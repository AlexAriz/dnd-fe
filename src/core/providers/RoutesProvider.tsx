import { RouterProvider } from "react-router";

import router from "Libs/router";

function RoutesProvider() {
  return <RouterProvider router={router} />;
}

export default RoutesProvider;
