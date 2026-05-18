import { Outlet } from "react-router";

function PublicPage() {
  return (
    <div className="flex flex-col h-lvh w-lvw items-center-safe justify-center-safe">
      <Outlet />
    </div>
  );
}

export default PublicPage;
