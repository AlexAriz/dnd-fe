import { useState } from "react";
import { useIntl } from "react-intl";

import { FormLayout } from "@astryxdesign/core/FormLayout";
import { Button } from "@astryxdesign/core/Button";
import { Link } from "@astryxdesign/core/Link";
import { useToast } from "@astryxdesign/core/Toast";

import type { AuthFlow } from "Types/auth";
import { AUTH_FLOW_MAP } from "Constants/auth";
import { AuthError } from "@supabase/supabase-js";
import router from "Libs/router";

interface AuthFormProps extends React.PropsWithChildren {
  onSubmit: () => Promise<void>;
  isValid: boolean;
  flow: AuthFlow;
}

function AuthForm({ children, onSubmit, isValid, flow }: AuthFormProps) {
  const intl = useIntl();
  const toast = useToast();
  const [buttonLoading, setButtonLoading] = useState<boolean>(false);

  const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    if (!isValid) {
      return;
    }

    setButtonLoading(true);
    try {
      await onSubmit();
      router.navigate(AUTH_FLOW_MAP[flow].redirectRoute);
    } catch (error) {
      toast({ body: (error as AuthError).message, type: "error", isAutoHide: true });
    } finally {
      setButtonLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-1/2 md:w-lg">
      <FormLayout>{children}</FormLayout>

      <div className="flex justify-end space-x-2 pt-2">
        <Link href={AUTH_FLOW_MAP[flow].linkRoute}>{intl.formatMessage({ id: AUTH_FLOW_MAP[flow].linkText })}</Link>

        <Button
          type="submit"
          variant="primary"
          isDisabled={!isValid}
          isLoading={buttonLoading}
          label={intl.formatMessage({ id: AUTH_FLOW_MAP[flow].submitButton })}
        />
      </div>
    </form>
  );
}

export default AuthForm;
