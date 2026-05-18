import { useIntl } from "react-intl";

import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { useAppDispatch } from "Hooks/state";
import Routes from "Constants/routes";
import router from "Libs/router";
import { logout } from "Features/Auth/api/Auth";
import { currentUserActions } from "Features/Auth/store/currentUser";

function Logout() {
  const intl = useIntl();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    const success = await logout();
    if (success) {
      dispatch(currentUserActions.clear());
      router.navigate(Routes.LOGIN);
    }
  };

  return (
    <>
      <Typography>{intl.formatMessage({ id: "LOGOUT" })}</Typography>

      <IconButton onClick={handleLogout}>
        <LogoutIcon />
      </IconButton>
    </>
  );
}
export default Logout;
