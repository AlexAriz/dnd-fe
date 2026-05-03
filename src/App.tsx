import { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
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
    <CssBaseline enableColorScheme>
      {!localeLoaded ?
        <LinearProgress />
      : <>
          <Typography variant="h1">{intl.get("DUMMY.HEADER")}</Typography>

          <Typography>{intl.get("DUMMY.MESSAGE", { count })}</Typography>

          {Object.values(LANGUAGES).map((language) => (
            <Button key={language} onClick={() => changeLocale(language)}>
              {language}
            </Button>
          ))}

          <Button onClick={onClick} variant="contained" color="success">
            {intl.get("DUMMY.CTA")}
          </Button>
        </>
      }
    </CssBaseline>
  );
}

export default App;
