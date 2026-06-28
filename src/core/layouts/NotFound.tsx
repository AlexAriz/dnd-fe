import ConstructionIcon from "@mui/icons-material/Construction";
import Typography from "@mui/material/Typography";
import { useIntl } from "react-intl";

function NotFound() {
  const intl = useIntl();

  return (
    <Typography>
      <ConstructionIcon /> {intl.formatMessage({ id: "PAGE_NOT_FOUND" })}
    </Typography>
  );
}

export default NotFound;
