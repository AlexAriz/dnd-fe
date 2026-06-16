import useRequiredContext from "Hooks/useRequiredContext";
import ActiveCharacterContext from "../context/ActiveCharacterContext";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import NumberField from "Components/NumberField";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useIntl } from "react-intl";

function CharacterHealth() {
  const intl = useIntl();
  const character = useRequiredContext(ActiveCharacterContext);

  return (
    <Grid container columns={3} rowSpacing={0} columnSpacing={2}>
      <Grid size={1}>
        <Stack>
          <Button variant="outlined" size="small" color="success">
            {intl.formatMessage({ id: "HEAL" })}
          </Button>

          <NumberField size="small" />

          <Button variant="outlined" size="small" color="error">
            {intl.formatMessage({ id: "DAMAGE" })}
          </Button>
        </Stack>
      </Grid>

      <Grid size={2} container columns={2} columnSpacing={0} className="border rounded">
        <Grid size={1} className="border-b border-r flex flex-col justify-center">
          <Typography align="center">{intl.formatMessage({ id: "CURRENT" })}</Typography>
        </Grid>

        <Grid size={1} className="border-b flex flex-col justify-center">
          <Typography align="center">{intl.formatMessage({ id: "MAX" })}</Typography>
        </Grid>

        <Grid size={1} className="border-r flex flex-col justify-center">
          <Typography align="center">{character.hitPoints.current}</Typography>
        </Grid>

        <Grid size={1} className="flex flex-col justify-center">
          <Typography align="center">{character.hitPoints.max}</Typography>
        </Grid>

        <Grid size={2} className="border-t flex flex-col justify-center">
          <Typography align="center">{intl.formatMessage({ id: "HITPOINTS" })}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CharacterHealth;
