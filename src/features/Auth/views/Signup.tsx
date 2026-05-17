import { useState } from "react";
import { NavLink } from "react-router";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import { signup } from "../store/currentUser";
import Routes from "../../../core/constants/routes";
import { useIntl } from "react-intl";
import Toast from "../../../core/components/Toast";
import { useAppDispatch } from "Hooks/state";

function Signup() {
  const intl = useIntl();
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();
  const [buttonLoading, setButtonLoading] = useState<boolean>(false);
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const formValid: boolean = Boolean(username && password && confirmPassword && password === confirmPassword);

  const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setButtonLoading(true);

    if (!formValid) {
      return;
    }

    await dispatch(signup({ email: username!, password: password! }));
    setButtonLoading(false);
    setSnackbarOpen(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Typography variant="h3">{intl.formatMessage({ id: "SIGNUP" })}</Typography>

        <TextField
          label={intl.formatMessage({ id: "USERNAME" })}
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

        <TextField
          label={intl.formatMessage({ id: "CONFIRM_PASSWORD" })}
          placeholder={intl.formatMessage({ id: "CONFIRM_PASSWORD" })}
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Button type="submit" variant="contained" disabled={!formValid} loading={buttonLoading}>
          {intl.formatMessage({ id: "SIGNUP" })}
        </Button>

        <Link component={NavLink} to={Routes.LOGIN}>
          {intl.formatMessage({ id: "LOGIN" })}
        </Link>
      </form>

      <Toast isOpen={snackbarOpen} onClose={() => setSnackbarOpen(false)} severity="error">
        {intl.formatMessage({ id: "ERROR_SIGNUP" })}
      </Toast>
    </>
  );
}

export default Signup;
