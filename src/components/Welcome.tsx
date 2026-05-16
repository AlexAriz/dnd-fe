import Typography from "@mui/material/Typography";
import { useIntl } from "react-intl";

function Welcome() {
  const intl = useIntl();

  return <Typography variant="h1">{intl.formatMessage({ id: "MODULE_HOME" })}</Typography>;
}

export default Welcome;
