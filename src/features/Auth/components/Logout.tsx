import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
import { logout } from "../api/Auth";
import { useAppDispatch } from "Hooks/state";
import { currentUserActions } from "../store/currentUser";
import router from "../../../router";
import Routes from "Constants/routes";

function Logout() {
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    const success = await logout();
    if (success) {
      dispatch(currentUserActions.clear());
      router.navigate(Routes.LOGIN);
    }
  };

  return (
    <IconButton onClick={handleLogout}>
      <LogoutIcon />
    </IconButton>
  );
}
export default Logout;
