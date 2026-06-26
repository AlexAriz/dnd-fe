import Grid from "@mui/material/Grid";
import { useGetStatsQuery } from "State/Stats";
import CircularProgress from "@mui/material/CircularProgress";
import AbilityStat from "./AbilityStat";

function CharacterAbilities() {
  const { data: stats, isLoading } = useGetStatsQuery();

  if (isLoading || !stats) return <CircularProgress />;

  return (
    <Grid container columns={3} rowSpacing={2} columnSpacing={4}>
      {stats.map((stat) => (
        <Grid key={stat.id} size={1}>
          <AbilityStat stat={stat} />
        </Grid>
      ))}
    </Grid>
  );
}

export default CharacterAbilities;
