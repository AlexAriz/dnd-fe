import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import CircularProgress from "@mui/material/CircularProgress";

import Auth from "../global/auth";
import Header from "./Header";

function AppPage() {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      await Auth.verifySession();
      setLoading(false);
    };

    init();
  }, []);

  return (
    <div className="w-screen h-screen scroll-auto">
      <Header />

      <main className="pt-16 w-screen px-3">
        {loading ?
          <CircularProgress />
        : <Outlet />}
      </main>
    </div>
  );
}

export default AppPage;
