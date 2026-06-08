import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Nav from "./Nav";
import SettingsMenu from "./SettingsMenu";

function Header() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Nav />

        <SettingsMenu />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
