import Typography from "@mui/material/Typography";
import intl from "react-intl-universal";

function Test() {
  return <Typography variant="h1">{intl.get("MODULES.TEST")}</Typography>;
}

export default Test;
