import { useState } from "react";
import { useIntl } from "react-intl";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import { PublicRoutes } from "Constants/routes";
import { signup } from "../api/Auth";
import router from "../../../router";
import AuthForm from "../components/AuthForm";

function Signup() {
  const intl = useIntl();
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();
  const formValid: boolean = Boolean(username && password && confirmPassword && password === confirmPassword);

  const handleSubmit = async () => {
    const success = await signup(username!, password!);
    if (success) {
      router.navigate(PublicRoutes.LOGIN);
    }
  };

  return (
    <>
      <AuthForm onSubmit={handleSubmit} isValid={formValid} flow="signup">
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
      </AuthForm>
    </>
  );
}

export default Signup;
