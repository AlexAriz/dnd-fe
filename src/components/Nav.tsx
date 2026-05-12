import { useState } from "react";
import { Link } from "react-router";
import intl from "react-intl-universal";
import IconButton from "@mui/joy/IconButton";
import Drawer from "@mui/joy/Drawer";
import ModalClose from "@mui/joy/ModalClose";
import DialogTitle from "@mui/joy/DialogTitle";
import MenuIcon from "@mui/icons-material/Menu";
import { AppRoutes } from "../constants/routes";
import { DialogContent, List, ListItem, ListItemButton } from "@mui/joy";
import Logout from "./Logout";

function Nav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <IconButton variant="plain" onClick={() => setIsOpen(true)}>
        <MenuIcon />
      </IconButton>

      <Drawer open={isOpen} onClose={() => setIsOpen(false)} color="neutral" invertedColors size="sm" variant="soft">
        <DialogTitle>Navigation</DialogTitle>
        <ModalClose />

        <DialogContent>
          <List component="nav">
            {Object.entries(AppRoutes).map(([route, path]) => (
              <ListItem component={Link} onClick={() => setIsOpen(false)} to={path} key={path}>
                <ListItemButton>{intl.get(`MODULES.${route}`)}</ListItemButton>
              </ListItem>
            ))}
          </List>
        </DialogContent>

        <div className="p-3 border-t flex justify-end-safe">
          <Logout />
        </div>
      </Drawer>
    </>
  );
}

export default Nav;
