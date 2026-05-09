import { useState } from "react";
import Button from "@mui/joy/Button";
import CssBaseline from "@mui/joy/CssBaseline";
import Typography from "@mui/joy/Typography";
import LinearProgress from "@mui/joy/LinearProgress";
import { LANGUAGES } from "./constants/language";
import useLanguage from "./hooks/useLanguage";
import intl from "react-intl-universal";

function App() {
  const [count, setCount] = useState<number>(0);
  const { changeLocale, localeLoaded } = useLanguage();

  const onClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <CssBaseline>
      {!localeLoaded ?
        <LinearProgress />
      : <>
          <Typography level="h1">{intl.get("DUMMY.HEADER")}</Typography>

          <Typography>{intl.get("DUMMY.MESSAGE", { count })}</Typography>

          {Object.values(LANGUAGES).map((language) => (
            <Button key={language} variant="outlined" onClick={() => changeLocale(language)}>
              {language}
            </Button>
          ))}

          <Button onClick={onClick}>{intl.get("DUMMY.CTA")}</Button>
        </>
      }
    </CssBaseline>
  );
}

export default App;
