import "../../../style.css";
import { Theme } from "@astryxdesign/core/theme";
import { LinkProvider } from "@astryxdesign/core/Link";
import { neutralTheme } from "@astryxdesign/theme-neutral/built";
import { Link } from "react-router";

function StylesProvider({ children }: React.PropsWithChildren) {
  return (
    <Theme theme={neutralTheme} mode="dark">
      <LinkProvider component={Link}>{children}</LinkProvider>
    </Theme>
  );
}

export default StylesProvider;
