import { useIntl } from "react-intl";
import Typography from "@mui/material/Typography";

function Test() {
  const intl = useIntl();

  return <Typography variant="h1">{intl.formatMessage({ id: "MODULE_TEST" })}</Typography>;
}

export default Test;
