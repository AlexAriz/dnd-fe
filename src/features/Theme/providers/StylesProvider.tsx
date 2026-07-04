import "../../../style.css";
import { Theme } from "@astryxdesign/core/theme";
import { LinkProvider } from "@astryxdesign/core/Link";
import { neutralTheme } from "@astryxdesign/theme-neutral/built";
import { NavLink } from "react-router";

function StylesProvider({ children }: React.PropsWithChildren) {
  return (
    <Theme theme={neutralTheme} mode="light">
      <LinkProvider component={NavLink}>{children}</LinkProvider>
    </Theme>
  );
}

export default StylesProvider;
