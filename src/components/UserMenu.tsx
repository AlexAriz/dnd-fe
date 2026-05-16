import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LanguagePicker from "./LanguagePicker";
import Logout from "./Logout";
import ThemePicker from "./ThemePicker";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

function UserMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <IconButton onClick={() => setIsOpen(true)}>
        <AccountCircleIcon />
      </IconButton>

      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)} color="neutral">
        <Toolbar />
        <Box className="w-64" component="nav">
          <List>
            <ListItem disablePadding>
              <Logout />
            </ListItem>

            <ListItem disablePadding>
              <ThemePicker />
            </ListItem>

            <ListItem disablePadding>
              <LanguagePicker />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
export default UserMenu;
