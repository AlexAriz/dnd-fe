import Typography from "@mui/material/Typography";
import usePath from "../../hooks/usePath";
import { useIntl } from "react-intl";

function HeaderTitle() {
  const intl = useIntl();
  const { id } = usePath();

  return (
    <Typography variant="h6" className="grow">
      {intl.formatMessage({ id })}
    </Typography>
  );
}

export default HeaderTitle;
