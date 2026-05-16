import Typography from "@mui/material/Typography";
import intl from "react-intl-universal";

function Welcome() {
  return <Typography variant="h1">{intl.get("MODULES.HOME")}</Typography>;
}

export default Welcome;
