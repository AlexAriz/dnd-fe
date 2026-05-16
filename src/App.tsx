import { RouterProvider } from "react-router";
import CssBaseline from "@mui/material/CssBaseline";
import CircularProgress from "@mui/material/CircularProgress";

import useLanguage from "./hooks/useLanguage";
import router from "./global/router";

function App() {
  const { localeLoaded } = useLanguage();

  return (
    <>
      <CssBaseline />
      {!localeLoaded ?
        <CircularProgress />
      : <>
          <RouterProvider router={router} />
        </>
      }
    </>
  );
}

export default App;
