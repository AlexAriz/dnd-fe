import { useIntl } from "react-intl";
import Typography from "@mui/material/Typography";

function Spells() {
  const intl = useIntl();

  return <Typography variant="h1">{intl.formatMessage({ id: "MODULE_SPELLS" })}</Typography>;
}

export default Spells;
