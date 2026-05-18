import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Toast from "Components/Toast";
import { PublicRoutes } from "Constants/routes";
import { useState } from "react";
import { useIntl } from "react-intl";
import { NavLink } from "react-router";

type Flow = "login" | "signup";
interface AuthFormProps extends React.PropsWithChildren {
  onSubmit: () => Promise<void>;
  isValid: boolean;
  flow: Flow;
}

interface FlowMap {
  submitButton: string;
  linkText: string;
  linkRoute: (typeof PublicRoutes)[keyof typeof PublicRoutes];
  errorMessage: string;
}
const flowMap: Record<Flow, FlowMap> = {
  login: {
    submitButton: "LOGIN",
    linkText: "SIGNUP",
    linkRoute: PublicRoutes.SIGNUP,
    errorMessage: "ERROR_LOGIN",
  },
  signup: {
    submitButton: "SIGNUP",
    linkText: "LOGIN",
    linkRoute: PublicRoutes.LOGIN,
    errorMessage: "ERROR_SIGNUP",
  },
};

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
    <Stack className="w-1/2 md:w-lg space-y-4" component="form" onSubmit={handleSubmit}>
      {children}

      <Button type="submit" variant="contained" disabled={!isValid} loading={buttonLoading}>
        {intl.formatMessage({ id: flowMap[flow].submitButton })}
      </Button>

      <Link component={NavLink} to={flowMap[flow].linkRoute}>
        {intl.formatMessage({ id: flowMap[flow].linkText })}
      </Link>

      <Toast isOpen={snackbarOpen} onClose={() => setSnackbarOpen(false)} severity="error">
        {intl.formatMessage({ id: flowMap[flow].errorMessage })}
      </Toast>
    </Stack>
  );
}

export default AuthForm;
