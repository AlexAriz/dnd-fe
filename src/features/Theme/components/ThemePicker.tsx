import { useColorScheme } from "@mui/material/styles";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import type { Mode } from "../types/theme";
import { THEMES } from "../constants/themes";

function ThemePicker() {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }

  const toggleTheme = (_event: React.MouseEvent<HTMLElement>, newMode: Mode) => {
    setMode(newMode);
  };

  return (
    <ToggleButtonGroup value={mode} exclusive onChange={toggleTheme}>
      {Object.values(THEMES).map(({ value, Icon }) => (
        <ToggleButton key={value} value={value}>
          <Icon />
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}

export default ThemePicker;
