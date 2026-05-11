import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import CircularProgress from "@mui/joy/CircularProgress";

import Auth from "../global/auth";
import Header from "./Header";
import Nav from "./Nav";

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
    <div className="w-screen h-screen flex scroll-auto">
      <Nav />

      <div className="grow flex flex-col">
        <Header />

        <main className="grow">
          {loading ?
            <CircularProgress />
          : <Outlet />}
        </main>
      </div>
    </div>
  );
}

export default AppPage;
