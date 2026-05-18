import { useIntl } from "react-intl";

import { useColorScheme } from "@mui/material/styles";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import Typography from "@mui/material/Typography";

import type { Mode } from "Features/Theme/types/theme";
import { THEMES } from "Features/Theme/constants/themes";

function ThemePicker() {
  const intl = useIntl();
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }

  const toggleTheme = (_event: React.MouseEvent<HTMLElement>, newMode: Mode) => {
    setMode(newMode);
  };

  return (
    <>
      <Typography>{intl.formatMessage({ id: "THEME" })}</Typography>

      <ToggleButtonGroup value={mode} exclusive onChange={toggleTheme}>
        {Object.values(THEMES).map(({ value, Icon }) => (
          <ToggleButton key={value} value={value}>
            <Icon />
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </>
  );
}

export default ThemePicker;
