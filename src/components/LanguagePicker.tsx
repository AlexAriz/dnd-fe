import MenuItem from "@mui/material/MenuItem";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import { LANGUAGES } from "../constants/language";
import useLanguage from "../hooks/useLanguage";
import type { Languages } from "../types/language";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import intl from "react-intl-universal";

function LanguagePicker() {
  const { locale, changeLocale } = useLanguage();

  const handleChange = (event: SelectChangeEvent) => {
    changeLocale(event.target.value as Languages);
  };

  return (
    <FormControl size="small">
      <InputLabel id="language-picker-label">{intl.get("LANGUAGE")}</InputLabel>
      <Select labelId="language-picker-label" label={intl.get("LANGUAGE")} value={locale} onChange={handleChange}>
        {Object.values(LANGUAGES).map((language) => (
          <MenuItem key={language} value={language}>
            {language}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
export default LanguagePicker;
