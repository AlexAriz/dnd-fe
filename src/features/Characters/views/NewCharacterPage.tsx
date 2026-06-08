import Typography from "@mui/material/Typography";
import { useIntl } from "react-intl";

function NewCharacterPage() {
  const intl = useIntl();

  return (
    <>
      <Typography variant="h1">{intl.formatMessage({ id: "NEW_CHARACTER" })}</Typography>
    </>
  );
}

export default NewCharacterPage;
