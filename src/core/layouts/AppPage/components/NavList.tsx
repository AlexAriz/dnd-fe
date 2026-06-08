import { useIntl } from "react-intl";
import { NavLink } from "react-router";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { Modules } from "Constants/routes";

interface NavListProps {
  className?: string;
  onNavigate?: () => void;
}
function NavList({ className, onNavigate }: NavListProps) {
  const intl = useIntl();

  return (
    <List className={className}>
      {Object.entries(Modules).map(([route, path]) => (
        <ListItem disablePadding key={path} onClick={onNavigate}>
          <NavLink to={path} className="w-full">
            {({ isActive }) => (
              <ListItemButton selected={isActive}>{intl.formatMessage({ id: `MODULE_${route}` })}</ListItemButton>
            )}
          </NavLink>
        </ListItem>
      ))}
    </List>
  );
}

export default NavList;
