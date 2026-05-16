import Typography from "@mui/material/Typography";
import LanguagePicker from "./LanguagePicker";
import Logout from "./Logout";
import Nav from "./Nav";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

function Header() {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Nav />

        <Typography variant="h6" className="grow">
          Brain
        </Typography>

        <Logout />

        <LanguagePicker />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
