import { useIntl } from "react-intl";

import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import Routes from "Constants/routes";
import router from "Libs/router";
import { logout } from "Libs/Auth";
import { useState } from "react";

function Logout() {
  const intl = useIntl();
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogout = async () => {
    setLoading(true);
    const success = await logout();
    if (success) {
      router.navigate(Routes.LOGIN);
    }
    setLoading(false);
  };

  return (
    <>
      <Typography>{intl.formatMessage({ id: "LOGOUT" })}</Typography>

      <IconButton onClick={handleLogout} loading={loading}>
        <LogoutIcon />
      </IconButton>
    </>
  );
}
export default Logout;
