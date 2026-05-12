import Typography from "@mui/joy/Typography";
import intl from "react-intl-universal";

function Welcome() {
  return <Typography level="h1">{intl.get("MODULES.HOME")}</Typography>;
}

export default Welcome;
