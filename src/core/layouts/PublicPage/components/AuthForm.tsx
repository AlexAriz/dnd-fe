import { useState } from "react";
import { useIntl } from "react-intl";
import { NavLink } from "react-router";

import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";

import Toast from "Components/Toast";
import type { AuthFlow } from "Types/auth";
import { AUTH_FLOW_MAP } from "Constants/auth";

interface AuthFormProps extends React.PropsWithChildren {
  onSubmit: () => Promise<void>;
  isValid: boolean;
  flow: AuthFlow;
}

function AuthForm({ children, onSubmit, isValid, flow }: AuthFormProps) {
  const intl = useIntl();
  const [buttonLoading, setButtonLoading] = useState<boolean>(false);
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);

  const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    if (!isValid) {
      return;
    }

    setButtonLoading(true);
    await onSubmit();
    setButtonLoading(false);
    setSnackbarOpen(true);
  };

  return (
    <Paper
      className="flex flex-col px-4 py-8 w-1/2 md:w-lg space-y-4"
      component="form"
      onSubmit={handleSubmit}
      elevation={3}
    >
      {children}

      <Button type="submit" variant="contained" disabled={!isValid} loading={buttonLoading}>
        {intl.formatMessage({ id: AUTH_FLOW_MAP[flow].submitButton })}
      </Button>

      <Link component={NavLink} to={AUTH_FLOW_MAP[flow].linkRoute}>
        {intl.formatMessage({ id: AUTH_FLOW_MAP[flow].linkText })}
      </Link>

      <Toast isOpen={snackbarOpen} onClose={() => setSnackbarOpen(false)} severity="error">
        {intl.formatMessage({ id: AUTH_FLOW_MAP[flow].errorMessage })}
      </Toast>
    </Paper>
  );
}

export default AuthForm;
