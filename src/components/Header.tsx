import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import LanguagePicker from "./LanguagePicker";
import Logout from "./Logout";
import Nav from "./Nav";
import ThemePicker from "./ThemePicker";

function Header() {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Nav />

        <Typography variant="h6" className="grow">
          Brain
        </Typography>

        <Logout />

        <ThemePicker />

        <LanguagePicker />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
