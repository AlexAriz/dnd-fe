import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import LanguagePicker from "Components/LanguagePicker";
import Logout from "Components/Logout";
import Nav from "Components/Nav";
import ThemePicker from "Components/ThemePicker";
import HeaderTitle from "./HeaderTitle";

function Header() {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Nav />

        <HeaderTitle />

        <Logout />

        <ThemePicker />

        <LanguagePicker />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
