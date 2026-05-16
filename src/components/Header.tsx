import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import LanguagePicker from "Components/LanguagePicker";
import Logout from "Components/Logout";
import Nav from "Components/Nav";
import ThemePicker from "Components/ThemePicker";

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
