import { useState } from "react";
import { NavLink } from "react-router";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Alert from "@mui/material/Alert";
import intl from "react-intl-universal";

import Auth from "../global/auth";
import Routes from "../constants/routes";

function Login() {
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
    <div className="flex flex-col h-screen w-screen items-center-safe justify-center-safe">
      <Stack component="form" onSubmit={handleSubmit} className="w-lg space-y-4">
        <Typography variant="h3">{intl.get("LOGIN")}</Typography>

        <TextField
          label={intl.get("EMAIL")}
          placeholder={intl.get("USERNAME")}
          type="email"
          onChange={(e) => setUsername(e.target.value)}
        />

        <TextField
          label={intl.get("PASSWORD")}
          placeholder={intl.get("PASSWORD")}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit" variant="contained" disabled={!formValid} loading={buttonLoading}>
          {intl.get("LOGIN")}
        </Button>

        <Link component={NavLink} to={Routes.SIGNUP}>
          {intl.get("SIGNUP")}
        </Link>
      </Stack>

      <Snackbar autoHideDuration={5000} open={snackbarOpen} onClose={() => setSnackbarOpen(false)}>
        <Alert onClose={() => setSnackbarOpen(false)} severity="error" variant="filled">
          {intl.get("ERRORS.LOGIN")}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Login;
