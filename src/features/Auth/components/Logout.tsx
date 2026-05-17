import LogoutIcon from "@mui/icons-material/Logout";
import { logout } from "../store/currentUser";
import IconButton from "@mui/material/IconButton";
import { useAppDispatch } from "Hooks/state";

function Logout() {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <IconButton onClick={handleLogout}>
      <LogoutIcon />
    </IconButton>
  );
}
export default Logout;
