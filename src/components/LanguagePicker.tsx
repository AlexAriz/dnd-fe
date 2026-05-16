import { LANGUAGES } from "Constants/language";
import type { Languages } from "Types/language";
import { useAppDispatch, useAppSelector } from "Hooks/state";
import { languageActions, languageSelectors } from "State/language";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";

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
