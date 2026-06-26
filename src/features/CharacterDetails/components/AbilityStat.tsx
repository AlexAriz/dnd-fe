import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useRequiredContext from "Hooks/useRequiredContext";
import { calculateModifier } from "Rules/stats";
import type { StatSummary } from "State/Stats/type";
import ActiveCharacterContext from "../context/ActiveCharacterContext";
import Divider from "@mui/material/Divider";
import { useIntl } from "react-intl";

interface AbilityStatProps {
  stat: StatSummary;
}

function AbilityStat({ stat }: AbilityStatProps) {
  const intl = useIntl();
  const character = useRequiredContext(ActiveCharacterContext);
  const bonus = character.stats[stat.id].proficiency ? character.proficiencyBonus : 0;

  return (
    <Stack component={Paper} variant="outlined" spacing={1}>
      <Typography variant="body1" align="center">
        {stat.name}
      </Typography>

      <Stack
        direction="row"
        className="justify-center"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <div>
          <Typography variant="caption">{intl.formatMessage({ id: "ABILITY_CHECK" })}</Typography>
          <Typography variant="h4" align="center">
            {calculateModifier(character.stats[stat.id].value)}
          </Typography>
        </div>

        <div>
          <Typography variant="caption">{intl.formatMessage({ id: "ABILITY_SAVE" })}</Typography>
          <Typography variant="h4" align="center">
            {calculateModifier(character.stats[stat.id].value) + bonus}
          </Typography>
        </div>
      </Stack>

      <Typography variant="body2" align="center">
        {character.stats[stat.id].value}
      </Typography>
    </Stack>
  );
}

export default AbilityStat;
