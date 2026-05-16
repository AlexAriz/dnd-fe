import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import type { Theme } from "Types/theme";

export const THEMES: Readonly<Record<string, Theme>> = {
  LIGHT: {
    NAME: "LIGHT",
    VALUE: "light",
    Icon: LightModeIcon,
  },
  DARK: {
    NAME: "DARK",
    VALUE: "dark",
    Icon: DarkModeIcon,
  },
  SYSTEM: {
    NAME: "SYSTEM",
    VALUE: "system",
    Icon: BuildCircleIcon,
  },
};
