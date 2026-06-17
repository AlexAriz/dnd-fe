import useRequiredContext from "Hooks/useRequiredContext";
import ActiveCharacterContext from "../context/ActiveCharacterContext";
import Grid from "@mui/material/Grid";
import { useGetStatsQuery } from "State/Stats";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { calculateModifier } from "Rules/stats";

function CharacterAbilities() {
  const { data: stats, isLoading } = useGetStatsQuery();
  const character = useRequiredContext(ActiveCharacterContext);

  if (isLoading || !stats) return <CircularProgress />;

  return (
    <Grid container columns={3} rowSpacing={2} columnSpacing={4}>
      {stats.map((stat) => (
        <Grid key={stat.id} size={1}>
          <Stack className="border rounded">
            <Typography variant="body1" align="center">
              {stat.name}
            </Typography>

            <Typography variant="h4" align="center">
              {calculateModifier(character.stats[stat.id].value)}
            </Typography>

            <Typography variant="body2" align="center">
              {character.stats[stat.id].value}
            </Typography>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
}

export default CharacterAbilities;
