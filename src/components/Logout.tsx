import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton } from "@mui/joy";
import Auth from "../global/auth";

function Logout() {
  const handleLogout = () => {
    Auth.logout();
  };

  return (
    <IconButton onClick={handleLogout}>
      <LogoutIcon />
    </IconButton>
  );
}
export default Logout;
