import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Nav from "./Nav";
import HeaderTitle from "./HeaderTitle";
import UserMenu from "./UserMenu";

function Header() {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Nav />

        <HeaderTitle />

        <UserMenu />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
