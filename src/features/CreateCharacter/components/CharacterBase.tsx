import { useGetClassesQuery } from "State/Classes";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

import { newCharacterActions, newCharacterSelectors } from "../store";
import { useAppDispatch, useAppSelector } from "Hooks/state";
import NumberField from "Components/NumberField";
import { useIntl } from "react-intl";
import Grid from "@mui/material/Grid";
import { useGetSubClassesQuery } from "State/SubClasses";
import { skipToken } from "@reduxjs/toolkit/query";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useGetStatsQuery } from "State/Stats";
import ToggleButton from "@mui/material/ToggleButton";
import type { AvailableStats } from "State/Stats/type";

function CharacterBase() {
  const intl = useIntl();
  const { data: classes, isLoading } = useGetClassesQuery();
  const selectedClassId = useAppSelector(newCharacterSelectors.selectClass);
  const statProficiencies = useAppSelector(newCharacterSelectors.selectStatProficiencies);
  const { data: subclasses } = useGetSubClassesQuery(selectedClassId ?? skipToken);
  const { data: stats } = useGetStatsQuery();
  const dispatch = useAppDispatch();

  const onChangeProficiencies = (_event: React.MouseEvent<HTMLElement>, newProficiencies: AvailableStats[]) => {
    dispatch(newCharacterActions.setStatProficiencies(newProficiencies));
  };

  return (
    <Grid container spacing={2} columns={3}>
      <Grid size={1}>
        <FormControl className="w-full">
          <InputLabel>{intl.formatMessage({ id: "CLASS" })}</InputLabel>
          <Select
            disabled={isLoading || !classes}
            defaultValue=""
            label={intl.formatMessage({ id: "CLASS" })}
            onChange={(e) => {
              dispatch(newCharacterActions.setClassId(e.target.value));
              dispatch(newCharacterActions.setSubClassId());
            }}
          >
            {classes &&
              classes.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid size={1}>
        <FormControl className="w-full">
          <InputLabel>{intl.formatMessage({ id: "SUBCLASS" })}</InputLabel>
          <Select
            disabled={!subclasses || subclasses.length === 0}
            defaultValue=""
            label={intl.formatMessage({ id: "SUBCLASS" })}
            onChange={(e) => {
              dispatch(newCharacterActions.setSubClassId(e.target.value));
            }}
          >
            {subclasses &&
              subclasses.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid size={1}>
        <NumberField
          className="w-full"
          label={intl.formatMessage({ id: "LEVEL" })}
          min={1}
          max={20}
          step={1}
          defaultValue={1}
          onValueChange={(value) => dispatch(newCharacterActions.setLevel(value ?? 1))}
        />
      </Grid>

      {stats && (
        <Grid size={3}>
          <ToggleButtonGroup value={statProficiencies} onChange={onChangeProficiencies}>
            {stats.map((stat) => (
              <ToggleButton key={stat.id} value={stat.id}>
                {stat.id}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Grid>
      )}
    </Grid>
  );
}

export default CharacterBase;
