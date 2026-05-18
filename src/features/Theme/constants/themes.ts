import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import BrightnessMediumIcon from "@mui/icons-material/BrightnessMedium";

import type { Theme } from "Features/Theme/types/theme";

export const THEMES: Readonly<Record<string, Theme>> = {
  LIGHT: {
    value: "light",
    Icon: LightModeIcon,
  },
  SYSTEM: {
    value: "system",
    Icon: BrightnessMediumIcon,
  },
  DARK: {
    value: "dark",
    Icon: DarkModeIcon,
  },
};
