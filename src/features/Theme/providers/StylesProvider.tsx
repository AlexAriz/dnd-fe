import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import GlobalStyles from "@mui/material/GlobalStyles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const darkTheme = createTheme({
  colorSchemes: {
    dark: true,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});
function StylesProvider({ children }: React.PropsWithChildren) {
  return (
    <ThemeProvider theme={darkTheme}>
      <StyledEngineProvider enableCssLayer>
        <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
        <CssBaseline />
        {children}
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default StylesProvider;
