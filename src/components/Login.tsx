import { useState } from "react";
import { useNavigate } from "react-router";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Snackbar from "@mui/joy/Snackbar";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import intl from "react-intl-universal";

import Auth from "../global/auth";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [buttonLoading, setButtonLoading] = useState<boolean>(false);
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const buttonEnabled: boolean = Boolean(username && password);

  const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setButtonLoading(true);

    if (!username || !password) {
      return;
    }

    const data = await Auth.login(username, password);
    if (data.session) {
      navigate("/");
    } else {
      setButtonLoading(false);
      setSnackbarOpen(true);
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen items-center-safe justify-center-safe">
      <Stack component="form" onSubmit={handleSubmit} className="w-lg space-y-4">
        <Typography level="h3">{intl.get("LOGIN")}</Typography>

        <FormControl>
          <FormLabel>{intl.get("EMAIL")}</FormLabel>
          <Input placeholder={intl.get("USERNAME")} type="email" onChange={(e) => setUsername(e.target.value)} />
        </FormControl>

        <FormControl>
          <FormLabel>{intl.get("PASSWORD")}</FormLabel>
          <Input placeholder={intl.get("PASSWORD")} type="password" onChange={(e) => setPassword(e.target.value)} />
        </FormControl>

        <Button type="submit" disabled={!buttonEnabled} loading={buttonLoading}>
          {intl.get("LOGIN")}
        </Button>
      </Stack>

      <Snackbar
        autoHideDuration={5000}
        open={snackbarOpen}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{
          horizontal: "left",
          vertical: "bottom",
        }}
        color="danger"
        size="md"
        variant="soft"
      >
        {intl.get("LOGIN_ERROR")}
      </Snackbar>
    </div>
  );
}

export default Login;
