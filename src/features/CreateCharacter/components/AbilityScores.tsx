import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import NumberField from "Components/NumberField";
import { useAppDispatch, useAppSelector } from "Hooks/state";
import { useGetStatsQuery } from "State/Stats";
import { newCharacterActions, newCharacterSelectors } from "../store";
import { useIntl } from "react-intl";

function AbilityScores() {
  const intl = useIntl();
  const { data: stats, isLoading } = useGetStatsQuery();
  const dispatch = useAppDispatch();
  const statModifiers = useAppSelector(newCharacterSelectors.selectStatModifiers);

  if (isLoading || !stats) return <CircularProgress />;

  return (
    <Grid container spacing={2} columns={3}>
      {stats.map((stat) => (
        <Grid size={1} key={stat.id}>
          <NumberField
            className="w-full"
            label={stat.name}
            min={1}
            max={20}
            step={1}
            defaultValue={8}
            onValueChange={(value) =>
              dispatch(
                newCharacterActions.setStatScore({
                  statId: stat.id,
                  value: value ?? 8,
                }),
              )
            }
            helperText={intl.formatMessage(
              { id: "NEW_CHARACTER_ABILITY_SCORE_MODIFIER" },
              { modifier: statModifiers[stat.id] },
            )}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default AbilityScores;
