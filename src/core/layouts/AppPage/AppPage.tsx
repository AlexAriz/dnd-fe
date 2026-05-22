import { Outlet } from "react-router";

import Header from "Layouts/AppPage/components/Header";
import { useEffect, useState } from "react";
import { verifySession } from "Libs/Auth";
import LoadingPage from "./components/LoadingPage";

function AppPage() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      await verifySession();
      setLoading(false);
    };

    init();
  });

  return loading ?
      <LoadingPage />
    : <div className="w-lvw h-lvh scroll-auto">
        <Header />
        <main className="pt-16 w-lvw px-3">
          <Outlet />
        </main>
      </div>;
}

export default AppPage;
