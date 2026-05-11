import { RouterProvider } from "react-router";
import CssBaseline from "@mui/joy/CssBaseline";
import LinearProgress from "@mui/joy/LinearProgress";

import useLanguage from "./hooks/useLanguage";
import router from "./global/router";

function App() {
  const { localeLoaded } = useLanguage();

  return (
    <>
      <CssBaseline />
      {!localeLoaded ?
        <LinearProgress />
      : <>
          <RouterProvider router={router} />
        </>
      }
    </>
  );
}

export default App;
