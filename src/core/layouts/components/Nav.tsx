import { useState } from "react";
import { Link } from "react-router";
import { useIntl } from "react-intl";

import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";

import { AppRoutes } from "Constants/routes";

function Nav() {
  const intl = useIntl();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <IconButton onClick={() => setIsOpen(true)}>
        <MenuIcon />
      </IconButton>

      <Drawer open={isOpen} onClose={() => setIsOpen(false)} color="neutral">
        <Box className="w-64" component="nav">
          <List>
            {Object.entries(AppRoutes).map(([route, path]) => (
              <ListItem disablePadding onClick={() => setIsOpen(false)} key={path}>
                <ListItemButton component={Link} to={path}>
                  {intl.formatMessage({ id: `MODULE_${route}` })}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Nav;
