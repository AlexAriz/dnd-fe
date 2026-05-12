import Typography from "@mui/joy/Typography";
import intl from "react-intl-universal";

function Test() {
  return <Typography level="h1">{intl.get("MODULES.TEST")}</Typography>;
}

export default Test;
