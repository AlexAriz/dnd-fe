import { RouterProvider } from "react-router";
import CssBaseline from "@mui/material/CssBaseline";
import CircularProgress from "@mui/material/CircularProgress";

import useLanguage from "Hooks/useLanguage";
import router from "Global/router";

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
