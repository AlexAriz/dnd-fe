import { AppShell } from "@astryxdesign/core/AppShell";
import { Center } from "@astryxdesign/core/Center";
import { Outlet } from "react-router";

function PublicPage() {
  return (
    <AppShell contentPadding={6}>
      <Center height="100%">
        <Outlet />
      </Center>
    </AppShell>
  );
}

export default PublicPage;
