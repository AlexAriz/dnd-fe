import { useColorScheme } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import intl from "react-intl-universal";
import type { Mode } from "Types/theme";
import { THEMES } from "Constants/themes";

function ThemePicker() {
  const { mode, setMode } = useColorScheme();

  const toggleTheme = (event: SelectChangeEvent) => {
    setMode(event.target.value as Mode);
  };

  return (
    <FormControl size="small">
      <InputLabel id="theme-picker-label">{intl.get("THEME")}</InputLabel>
      <Select labelId="theme-picker-label" label={intl.get("THEME")} value={mode} onChange={toggleTheme}>
        {Object.values(THEMES).map(({ VALUE, NAME, Icon }) => (
          <MenuItem value={VALUE}>
            <Icon />
            {intl.get(`THEMES.${NAME}`)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default ThemePicker;
