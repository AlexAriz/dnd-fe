import { useState } from "react";

import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import SettingsIcon from "@mui/icons-material/Settings";

import Logout from "Layouts/AppPage/components/Logout";
import ThemePicker from "Features/Theme/components/ThemePicker";

function SettingsMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <IconButton onClick={() => setIsOpen(true)}>
        <SettingsIcon />
      </IconButton>

      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)} color="neutral">
        <Box className="w-64">
          <List>
            <ListItem className="justify-between">
              <ThemePicker />
            </ListItem>

            <ListItem className="justify-between">
              <Logout />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
export default SettingsMenu;
