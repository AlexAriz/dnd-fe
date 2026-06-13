import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import { useAppSelector } from "Hooks/state";
import { useGetStatsQuery } from "State/Stats";
import { newCharacterSelectors } from "../store";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import StatInput from "./StatInput";
import StatBonusInput from "./StatBonusInput";
import StatBonusDisplay from "./StatBonusDisplay";
import { useIntl } from "react-intl";

function AbilityScores() {
  const intl = useIntl();
  const { data: stats, isLoading } = useGetStatsQuery();
  const statBonuses = useAppSelector(newCharacterSelectors.selectStatBonuses);

  if (isLoading || !stats) return <CircularProgress />;

  return (
    <>
      <Grid container spacing={2} columns={3}>
        {stats.map((stat) => (
          <StatInput key={stat.id} statSummary={stat} />
        ))}
      </Grid>

      <Stack className="mt-4" spacing={2}>
        <Typography>{intl.formatMessage({ id: "NEW_CHARACTER_BONUS" }, { count: 0 })}</Typography>

        {statBonuses.map((statBonus, index) => (
          <StatBonusDisplay key={`${statBonus.name}:${index}`} index={index} statBonus={statBonus} />
        ))}

        <StatBonusInput />
      </Stack>
    </>
  );
}

export default AbilityScores;
