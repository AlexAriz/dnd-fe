import LogoutIcon from "@mui/icons-material/Logout";
import Auth from "Global/auth";
import IconButton from "@mui/material/IconButton";

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
