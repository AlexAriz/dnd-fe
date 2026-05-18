import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Nav from "./Nav";
import UserMenu from "./UserMenu";
import Typography from "@mui/material/Typography";
import { useIntl } from "react-intl";
import usePath from "Hooks/usePath";

function Header() {
  const intl = useIntl();
  const { id } = usePath();

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Nav />

        <Typography variant="h6" className="grow">
          {intl.formatMessage({ id })}
        </Typography>

        <UserMenu />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
