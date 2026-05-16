import { useColorScheme } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import type { Mode } from "Types/theme";
import { THEMES } from "Constants/themes";
import { useIntl } from "react-intl";

function ThemePicker() {
  const { mode, setMode } = useColorScheme();
  const intl = useIntl();
  if (!mode) {
    return null;
  }

  const toggleTheme = (event: SelectChangeEvent) => {
    setMode(event.target.value as Mode);
  };

  return (
    <FormControl size="small">
      <InputLabel id="theme-picker-label">{intl.formatMessage({ id: "THEME" })}</InputLabel>
      <Select
        labelId="theme-picker-label"
        label={intl.formatMessage({ id: "THEME" })}
        value={mode}
        onChange={toggleTheme}
      >
        {Object.values(THEMES).map(({ VALUE, NAME, Icon }) => (
          <MenuItem value={VALUE}>
            <Icon />
            {intl.formatMessage({ id: `THEME_${NAME}` })}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default ThemePicker;
