import { useState } from "react";
import { useIntl } from "react-intl";
import { Heading } from "@astryxdesign/core/Heading";
import { TextInput } from "@astryxdesign/core/TextInput";

import { signup } from "Libs/Supabase";
import AuthForm from "../components/AuthForm";

function Signup() {
  const intl = useIntl();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const formValid: boolean = Boolean(email && password && confirmPassword && password === confirmPassword);

  const handleSubmit = async () => {
    await signup(email!, password!);
  };

  return (
    <AuthForm onSubmit={handleSubmit} isValid={formValid} flow="signup">
      <Heading level={3}>{intl.formatMessage({ id: "SIGNUP" })}</Heading>

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

      <TextInput
        label={intl.formatMessage({ id: "CONFIRM_PASSWORD" })}
        placeholder={intl.formatMessage({ id: "CONFIRM_PASSWORD" })}
        type="password"
        onChange={setConfirmPassword}
        value={confirmPassword}
      />
    </AuthForm>
  );
}

export default Signup;
