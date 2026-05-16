import { useState } from "react";
import { NavLink } from "react-router";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Alert from "@mui/material/Alert";
import intl from "react-intl-universal";

import Auth from "../global/auth";
import Routes from "../constants/routes";

function Signup() {
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

    await Auth.signup(username!, password!);
    setButtonLoading(false);
    setSnackbarOpen(true);
  };

  return (
    <div className="flex flex-col h-lvh w-lvw items-center-safe justify-center-safe">
      <Stack component="form" onSubmit={handleSubmit} className="w-lg space-y-4">
        <Typography variant="h3">{intl.get("SIGNUP")}</Typography>

        <TextField
          label={intl.get("USERNAME")}
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

        <TextField
          label={intl.get("CONFIRM_PASSWORD")}
          placeholder={intl.get("CONFIRM_PASSWORD")}
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Button type="submit" variant="contained" disabled={!formValid} loading={buttonLoading}>
          {intl.get("SIGNUP")}
        </Button>

        <Link component={NavLink} to={Routes.LOGIN}>
          {intl.get("LOGIN")}
        </Link>
      </Stack>

      <Snackbar autoHideDuration={5000} open={snackbarOpen} onClose={() => setSnackbarOpen(false)}>
        <Alert onClose={() => setSnackbarOpen(false)} severity="error" variant="filled">
          {intl.get("ERROR.SIGNUP")}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Signup;
