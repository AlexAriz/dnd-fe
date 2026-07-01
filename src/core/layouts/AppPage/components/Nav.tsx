import { useIntl } from "react-intl";
import { TopNavItem } from "@astryxdesign/core/TopNav";
import { Modules } from "Constants/routes";
import { matchPath, useLocation } from "react-router";

function Nav() {
  const intl = useIntl();
  const { pathname } = useLocation();

  return Object.entries(Modules).map(([route, path]) => (
    <TopNavItem
      key={path}
      label={intl.formatMessage({ id: `MODULE_${route}` })}
      href={path}
      isSelected={Boolean(matchPath(path.concat("/*"), pathname))}
    />
  ));
}

export default Nav;
