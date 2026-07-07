import { useAppDispatch, useAppSelector } from "Hooks/state";
import type { StatSummary } from "State/Stats/type";
import { newCharacterActions, newCharacterSelectors } from "../store";
import { useIntl } from "react-intl";
import { calculateModifier } from "Rules/stats";
import { NumberInput } from "@astryxdesign/core/NumberInput";

interface StatInputProps {
  statSummary: StatSummary;
}

function StatInput({ statSummary }: StatInputProps) {
  const intl = useIntl();
  const dispatch = useAppDispatch();
  const score = useAppSelector((state) => newCharacterSelectors.selectStatScore(state, statSummary.id));
  const modifier = calculateModifier(score);

  return (
    <NumberInput
      label={statSummary.name}
      description={intl.formatMessage({ id: "ABILITY_SCORE_MODIFIER" }, { modifier })}
      min={1}
      max={20}
      step={1}
      value={score}
      onChange={(value) =>
        dispatch(
          newCharacterActions.setStatScore({
            statId: statSummary.id,
            value: value ?? 8,
          }),
        )
      }
    />
  );
}

export default StatInput;
