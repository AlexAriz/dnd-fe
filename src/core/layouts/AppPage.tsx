import { Outlet } from "react-router";

import Header from "./components/Header";
import UserProvider from "Features/Auth/providers/UserProvider";

function AppPage() {
  return (
    <UserProvider>
      <div className="w-lvw h-lvh scroll-auto">
        <Header />
        <main className="pt-16 w-lvw px-3">
          <Outlet />
        </main>
      </div>
    </UserProvider>
  );
}

export default AppPage;
