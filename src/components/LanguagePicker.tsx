import MenuItem from "@mui/material/MenuItem";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import { LANGUAGES } from "Constants/language";
import type { Languages } from "Types/language";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { useIntl } from "react-intl";
import { useAppDispatch, useAppSelector } from "Hooks/state";
import { languageActions, languageSelectors } from "State/language";

function LanguagePicker() {
  const dispatch = useAppDispatch();
  const language = useAppSelector(languageSelectors.selectLanguage);
  const intl = useIntl();

  const handleChange = (event: SelectChangeEvent) => {
    const selectedLanguage = event.target.value as Languages;
    dispatch(languageActions.changeLanguage(selectedLanguage));
  };

  return (
    <FormControl size="small">
      <InputLabel id="language-picker-label">{intl.formatMessage({ id: "LANGUAGE" })}</InputLabel>
      <Select
        labelId="language-picker-label"
        label={intl.formatMessage({ id: "LANGUAGE" })}
        value={language}
        onChange={handleChange}
      >
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
