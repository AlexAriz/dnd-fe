import { Grid } from "@astryxdesign/core/Grid";
import { useGetStatsQuery } from "State/Stats";
import LoadingContent from "Components/LoadingContent";
import AbilityStat from "./AbilityStat";

function CharacterAbilities() {
  const { data: stats, isLoading } = useGetStatsQuery();

  if (isLoading || !stats) return <LoadingContent />;

  return (
    <Grid columns={3} rowGap={2} columnGap={4}>
      {stats.map((stat) => (
        <AbilityStat key={stat.id} stat={stat} />
      ))}
    </Grid>
  );
}

export default CharacterAbilities;
