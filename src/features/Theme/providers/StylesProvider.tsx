import "../../../style.css";
import { Theme } from "@astryxdesign/core/theme";
import { LinkProvider } from "@astryxdesign/core/Link";
import { stoneTheme } from "@astryxdesign/theme-stone/built";
import { NavLink } from "react-router";
import { useAppSelector } from "Hooks/state";
import { themeSelectors } from "State/Theme";

function StylesProvider({ children }: React.PropsWithChildren) {
  const theme = useAppSelector(themeSelectors.selectTheme);

  return (
    <Theme theme={stoneTheme} mode={theme}>
      <LinkProvider component={NavLink}>{children}</LinkProvider>
    </Theme>
  );
}

export default StylesProvider;
