import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import NumberField from "Components/NumberField";
import { useAppDispatch } from "Hooks/state";
import { useState } from "react";
import type { AvailableStats } from "State/Stats/type";
import { newCharacterActions } from "../store";
import { useGetStatsQuery } from "State/Stats";
import { useIntl } from "react-intl";

function StatBonusInput() {
  const intl = useIntl();
  const { data: stats = [] } = useGetStatsQuery();
  const dispatch = useAppDispatch();
  const [bonusName, setBonusName] = useState<string>("");
  const [bonusStatId, setBonusStatId] = useState<AvailableStats | "">("");
  const [bonusScore, setBonusScore] = useState<number>(0);

  const canAddBonus: boolean = Boolean(bonusName && bonusStatId && bonusScore);
  const handleAddBonus = () => {
    if (!canAddBonus) return;
    dispatch(
      newCharacterActions.addStatBonus({ name: bonusName!, statId: bonusStatId as AvailableStats, bonus: bonusScore! }),
    );
    setBonusName("");
    setBonusStatId("");
    setBonusScore(0);
  };

  return (
    <>
      <Grid container spacing={2} columns={3}>
        <Grid size={1}>
          <TextField
            className="w-full"
            label={intl.formatMessage({ id: "NAME" })}
            value={bonusName}
            onChange={(e) => setBonusName(e.target.value)}
          />
        </Grid>

        <Grid size={1}>
          <FormControl className="w-full">
            <InputLabel>{intl.formatMessage({ id: "NEW_CHARACTER_STAT" })}</InputLabel>
            <Select
              value={bonusStatId}
              label={intl.formatMessage({ id: "NEW_CHARACTER_STAT" })}
              onChange={(e) => setBonusStatId(e.target.value as AvailableStats)}
            >
              {stats.map((stat) => (
                <MenuItem key={stat.id} value={stat.id}>
                  {stat.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid size={1}>
          <NumberField
            className="w-full"
            label={intl.formatMessage({ id: "NEW_CHARACTER_BONUS" }, { count: 1 })}
            min={1}
            max={20}
            step={1}
            value={bonusScore}
            onValueChange={(value) => setBonusScore(value ?? 0)}
          />
        </Grid>
      </Grid>

      <Button variant="outlined" disabled={!canAddBonus} onClick={handleAddBonus}>
        {intl.formatMessage({ id: "NEW_CHARACTER_ADD_STAT_BONUS" })}
      </Button>
    </>
  );
}

export default StatBonusInput;
