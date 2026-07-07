import { DropdownMenu } from "@astryxdesign/core/DropdownMenu";
import { useIntl } from "react-intl";
import { useState } from "react";
import { logout } from "Libs/Supabase";
import router from "Libs/router";
import { PublicRoutes } from "Constants/routes";
import { UserCircleIcon } from "@heroicons/react/24/outline";

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
    <DropdownMenu
      button={{
        label: intl.formatMessage({ id: "MENU" }),
        icon: <UserCircleIcon />,
        variant: "ghost",
        isIconOnly: true,
      }}
      hasChevron={false}
      items={[{ label: intl.formatMessage({ id: "LOGOUT" }), onClick: handleLogout, isDisabled: loading }]}
    />
  );
}
export default UserMenu;
