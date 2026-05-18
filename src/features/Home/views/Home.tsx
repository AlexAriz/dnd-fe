import { useIntl } from "react-intl";
import Typography from "@mui/material/Typography";

function Home() {
  const intl = useIntl();

  return <Typography variant="h1">{intl.formatMessage({ id: "MODULE_HOME" })}</Typography>;
}

export default Home;
