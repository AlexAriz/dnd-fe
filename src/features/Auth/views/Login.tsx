import { useState } from "react";
import { NavLink } from "react-router";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";

import Routes from "../../../core/constants/routes";
import { useIntl } from "react-intl";
import Toast from "../../../core/components/Toast";
import { login } from "../api/Auth";
import { useAppDispatch } from "Hooks/state";
import { currentUserActions } from "../store/currentUser";
import router from "../../../router";

function Login() {
  const intl = useIntl();
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [buttonLoading, setButtonLoading] = useState<boolean>(false);
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const formValid: boolean = Boolean(username && password);

  const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setButtonLoading(true);

    if (!formValid) {
      return;
    }

    const user = await login(username!, password!);
    if (user) {
      dispatch(currentUserActions.setUser(user));
      router.navigate(Routes.HOME);
    }
    setButtonLoading(false);
    setSnackbarOpen(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Typography variant="h3">{intl.formatMessage({ id: "LOGIN" })}</Typography>

        <TextField
          label={intl.formatMessage({ id: "EMAIL" })}
          placeholder={intl.formatMessage({ id: "USERNAME" })}
          type="email"
          onChange={(e) => setUsername(e.target.value)}
        />

        <TextField
          label={intl.formatMessage({ id: "PASSWORD" })}
          placeholder={intl.formatMessage({ id: "PASSWORD" })}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit" variant="contained" disabled={!formValid} loading={buttonLoading}>
          {intl.formatMessage({ id: "LOGIN" })}
        </Button>

        <Link component={NavLink} to={Routes.SIGNUP}>
          {intl.formatMessage({ id: "SIGNUP" })}
        </Link>
      </form>

      <Toast isOpen={snackbarOpen} onClose={() => setSnackbarOpen(false)} severity="error">
        {intl.formatMessage({ id: "ERROR_LOGIN" })}
      </Toast>
    </>
  );
}

export default Login;
