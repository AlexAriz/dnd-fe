import { useAppDispatch } from "Hooks/state";
import { useState } from "react";
import type { AvailableStats } from "State/Stats/type";
import { newCharacterActions } from "../store";
import { useGetStatsQuery } from "State/Stats";
import { useIntl } from "react-intl";
import { Grid } from "@astryxdesign/core/Grid";
import { Button } from "@astryxdesign/core/Button";
import { TextInput } from "@astryxdesign/core/TextInput";
import { Selector } from "@astryxdesign/core/Selector";
import { NumberInput } from "@astryxdesign/core/NumberInput";
import { Stack } from "@astryxdesign/core/Stack";

function StatBonusInput() {
  const intl = useIntl();
  const { data: stats = [] } = useGetStatsQuery();
  const dispatch = useAppDispatch();
  const [bonusName, setBonusName] = useState<string>("");
  const [bonusStatId, setBonusStatId] = useState<AvailableStats | null>(null);
  const [bonusScore, setBonusScore] = useState<number>(0);

  const canAddBonus: boolean = Boolean(bonusName && bonusStatId && bonusScore);
  const handleAddBonus = () => {
    if (!canAddBonus) return;
    dispatch(
      newCharacterActions.addStatBonus({ name: bonusName!, statId: bonusStatId as AvailableStats, bonus: bonusScore! }),
    );
    setBonusName("");
    setBonusStatId(null);
    setBonusScore(0);
  };

  return (
    <Stack gap={2}>
      <Grid columns={3} gap={2}>
        <TextInput label={intl.formatMessage({ id: "NAME" })} value={bonusName} onChange={setBonusName} />

        <Selector
          label={intl.formatMessage({ id: "STAT" })}
          options={stats.map((option) => ({
            value: option.id,
            label: option.name,
          }))}
          value={bonusStatId}
          onChange={(statId) => setBonusStatId(statId as AvailableStats)}
          hasClear
        />

        <NumberInput
          label={intl.formatMessage({ id: "BONUS" }, { count: 1 })}
          min={1}
          max={20}
          step={1}
          value={bonusScore}
          onChange={setBonusScore}
        />
      </Grid>

      <Button
        label={intl.formatMessage({ id: "ADD_STAT_BONUS" })}
        variant="primary"
        isDisabled={!canAddBonus}
        onClick={handleAddBonus}
      />
    </Stack>
  );
}

export default StatBonusInput;
