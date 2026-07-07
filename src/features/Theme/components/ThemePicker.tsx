import { useIntl } from "react-intl";

import { IconButton } from "@astryxdesign/core/IconButton";
import { useAppDispatch, useAppSelector } from "Hooks/state";
import { themeActions, themeSelectors } from "State/Theme";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

function ThemePicker() {
  const intl = useIntl();
  const dispatch = useAppDispatch();
  const theme = useAppSelector(themeSelectors.selectTheme);

  return (
    <IconButton
      label={intl.formatMessage({ id: "THEME" })}
      icon={theme === "dark" ? <SunIcon /> : <MoonIcon />}
      variant="ghost"
      onClick={() => dispatch(themeActions.toggleTheme())}
    />
  );
}

export default ThemePicker;
