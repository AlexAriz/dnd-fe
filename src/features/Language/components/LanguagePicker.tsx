import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";

import { useAppDispatch, useAppSelector } from "Hooks/state";
import { LANGUAGES } from "Features/Language/constants/language";
import type { Languages } from "Features/Language/types/language";
import { languageActions, languageSelectors } from "Features/Language/store/language";

function LanguagePicker() {
  const dispatch = useAppDispatch();
  const language = useAppSelector(languageSelectors.selectLanguage);

  const handleChange = (_event: React.MouseEvent<HTMLElement>, selectedLanguage: Languages) => {
    dispatch(languageActions.changeLanguage(selectedLanguage));
  };

  return (
    <ToggleButtonGroup value={language} exclusive onChange={handleChange}>
      {Object.values(LANGUAGES).map((language) => (
        <ToggleButton key={language} value={language}>
          {language}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
export default LanguagePicker;
