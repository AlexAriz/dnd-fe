import Option from "@mui/joy/Option";
import Select from "@mui/joy/Select";
import { LANGUAGES } from "../constants/language";
import useLanguage from "../hooks/useLanguage";

function LanguagePicker() {
  const { locale, changeLocale } = useLanguage();

  return (
    <Select value={locale}>
      {Object.values(LANGUAGES).map((language) => (
        <Option key={language} value={language} onClick={() => changeLocale(language)}>
          {language}
        </Option>
      ))}
    </Select>
  );
}
export default LanguagePicker;
