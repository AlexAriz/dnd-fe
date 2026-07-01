import { useState } from "react";
import { useIntl } from "react-intl";
import { Heading } from "@astryxdesign/core/Heading";
import { TextInput } from "@astryxdesign/core/TextInput";

import { login } from "Libs/Supabase";
import AuthForm from "../components/AuthForm";

function Login() {
  const intl = useIntl();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const formValid: boolean = Boolean(email && password);

  const handleSubmit = async () => {
    await login(email!, password!);
  };

  return (
    <AuthForm onSubmit={handleSubmit} isValid={formValid} flow="login">
      <Heading level={3}>{intl.formatMessage({ id: "LOGIN" })}</Heading>

      <TextInput
        label={intl.formatMessage({ id: "EMAIL" })}
        placeholder={intl.formatMessage({ id: "EMAIL" })}
        type="email"
        onChange={setEmail}
        value={email}
      />

      <TextInput
        label={intl.formatMessage({ id: "PASSWORD" })}
        placeholder={intl.formatMessage({ id: "PASSWORD" })}
        type="password"
        onChange={setPassword}
        value={password}
      />
    </AuthForm>
  );
}

export default Login;
