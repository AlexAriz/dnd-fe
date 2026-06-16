import Grid from "@mui/material/Grid";
import NumberField from "Components/NumberField";
import { useAppDispatch, useAppSelector } from "Hooks/state";
import type { StatSummary } from "State/Stats/type";
import { newCharacterActions, newCharacterSelectors } from "../store";
import { useIntl } from "react-intl";
import { calculateModifier } from "Rules/stats";

interface StatInputProps {
  statSummary: StatSummary;
}

function StatInput({ statSummary }: StatInputProps) {
  const intl = useIntl();
  const dispatch = useAppDispatch();
  const score = useAppSelector((state) => newCharacterSelectors.selectStatScore(state, statSummary.id));
  const modifier = calculateModifier(score);

  return (
    <Grid size={1}>
      <NumberField
        className="w-full"
        label={statSummary.name}
        min={1}
        max={20}
        step={1}
        defaultValue={8}
        onValueChange={(value) =>
          dispatch(
            newCharacterActions.setStatScore({
              statId: statSummary.id,
              value: value ?? 8,
            }),
          )
        }
        helperText={intl.formatMessage({ id: "ABILITY_SCORE_MODIFIER" }, { modifier })}
      />
    </Grid>
  );
}

export default StatInput;
