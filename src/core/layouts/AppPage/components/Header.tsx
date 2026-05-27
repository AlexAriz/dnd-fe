import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Nav from "./Nav";
import SettingsMenu from "./SettingsMenu";
import { useGetProfileState } from "Features/Profile/store/profile";
import Typography from "@mui/material/Typography";

function Header() {
  const { data: profile } = useGetProfileState();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Nav />

        <Typography variant="h6" className="grow">
          {profile?.username}
        </Typography>

        <SettingsMenu />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
