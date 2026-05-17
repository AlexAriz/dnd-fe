import Stack from "@mui/material/Stack";
import { Outlet } from "react-router";

function PublicPage() {
  return (
    <div className="flex flex-col h-lvh w-lvw items-center-safe justify-center-safe">
      <Stack className="w-1/2 md:w-lg space-y-4">
        <Outlet />
      </Stack>
    </div>
  );
}

export default PublicPage;
