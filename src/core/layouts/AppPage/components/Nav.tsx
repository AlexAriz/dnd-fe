import { useState } from "react";

import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";

import NavList from "./NavList";

function Nav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="grow">
      <IconButton
        sx={{
          display: { xs: "block", sm: "none" },
        }}
        onClick={() => setIsOpen(true)}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        sx={{
          display: { xs: "block", sm: "none" },
        }}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        color="neutral"
      >
        <Box className="w-64" component="nav">
          <NavList onNavigate={() => setIsOpen(false)} />
        </Box>
      </Drawer>

      <Box
        component="nav"
        sx={{
          display: { xs: "none", sm: "block" },
        }}
      >
        <NavList className="flex" />
      </Box>
    </div>
  );
}

export default Nav;
