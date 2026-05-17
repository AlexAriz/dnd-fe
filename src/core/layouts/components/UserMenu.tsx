import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LanguagePicker from "Features/Language/components/LanguagePicker";
import Logout from "Features/Auth/components/Logout";
import ThemePicker from "./ThemePicker";

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
            <ListItem disablePadding onClick={() => setIsOpen(false)}>
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
