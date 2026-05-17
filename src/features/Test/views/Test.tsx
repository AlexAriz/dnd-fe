import Typography from "@mui/material/Typography";
import { useIntl } from "react-intl";

function Test() {
  const intl = useIntl();

  return <Typography variant="h1">{intl.formatMessage({ id: "MODULE_TEST" })}</Typography>;
}

export default Test;
