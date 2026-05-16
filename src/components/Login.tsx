import { useState } from "react";
import { NavLink } from "react-router";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Alert from "@mui/material/Alert";

import Auth from "Global/auth";
import Routes from "Constants/routes";
import { useIntl } from "react-intl";

function Login() {
  const intl = useIntl();
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

    await Auth.login(username!, password!);
    setButtonLoading(false);
    setSnackbarOpen(true);
  };

  return (
    <div className="flex flex-col h-lvh w-lvw items-center-safe justify-center-safe">
      <Stack component="form" onSubmit={handleSubmit} className="w-1/2 md:w-lg space-y-4">
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
      </Stack>

      <Snackbar autoHideDuration={5000} open={snackbarOpen} onClose={() => setSnackbarOpen(false)}>
        <Alert onClose={() => setSnackbarOpen(false)} severity="error" variant="filled">
          {intl.formatMessage({ id: "ERROR_LOGIN" })}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Login;
