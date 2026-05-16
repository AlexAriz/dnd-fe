import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import { useColorScheme } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import intl from "react-intl-universal";

type Mode = "light" | "dark" | "system";

function ThemePicker() {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }

  const toggleTheme = (event: SelectChangeEvent) => {
    setMode(event.target.value as Mode);
  };

  return (
    <FormControl size="small">
      <InputLabel id="theme-picker-label">{intl.get("THEME")}</InputLabel>
      <Select labelId="theme-picker-label" label={intl.get("THEME")} value={mode} onChange={toggleTheme}>
        <MenuItem value="light">
          <LightModeIcon />
          {intl.get("THEMES.LIGHT")}
        </MenuItem>
        <MenuItem value="dark">
          <DarkModeIcon />
          {intl.get("THEMES.DARK")}
        </MenuItem>
        <MenuItem value="system">
          <BuildCircleIcon />
          {intl.get("THEMES.SYSTEM")}
        </MenuItem>
      </Select>
    </FormControl>
  );
}

export default ThemePicker;
