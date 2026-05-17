import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import type { Theme } from "../types/theme";

export const THEMES: Readonly<Record<string, Theme>> = {
  LIGHT: {
    value: "light",
    Icon: LightModeIcon,
  },
  DARK: {
    value: "dark",
    Icon: DarkModeIcon,
  },
  SYSTEM: {
    value: "system",
    Icon: BuildCircleIcon,
  },
};
