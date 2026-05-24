import { useState } from "react";
import { useIntl } from "react-intl";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import { AppRoutes } from "Constants/routes";
import router from "Libs/router";
import { login } from "Libs/Auth";
import AuthForm from "Features/Auth/components/AuthForm";

function Login() {
  const intl = useIntl();
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const formValid: boolean = Boolean(username && password);

  const handleSubmit = async () => {
    const user = await login(username!, password!);
    if (user) {
      router.navigate(AppRoutes.HOME);
    }
  };

  return (
    <AuthForm onSubmit={handleSubmit} isValid={formValid} flow="login">
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
    </AuthForm>
  );
}

export default Login;
