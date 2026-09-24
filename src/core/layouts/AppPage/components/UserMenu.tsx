import { useIntl } from "react-intl";
import { useState } from "react";
import { logout } from "Libs/Supabase";
import router from "Libs/router";
import { PublicRoutes } from "Constants/routes";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";
import { IconButton } from "@astryxdesign/core/IconButton";

function UserMenu() {
  const intl = useIntl();
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogout = async () => {
    setLoading(true);
    const success = await logout();
    if (success) {
      router.navigate(PublicRoutes.LOGIN);
    }
    setLoading(false);
  };

  return (
    <IconButton
      label={intl.formatMessage({ id: "LOGOUT" })}
      icon={<ArrowRightStartOnRectangleIcon />}
      variant="ghost"
      onClick={handleLogout}
      isDisabled={loading}
    />
  );
}
export default UserMenu;
