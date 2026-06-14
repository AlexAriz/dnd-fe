import { useGetClassesQuery } from "State/Classes";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

import { newCharacterActions } from "../store";
import { useAppDispatch } from "Hooks/state";
import NumberField from "Components/NumberField";
import { useIntl } from "react-intl";
import Grid from "@mui/material/Grid";

function CharacterBase() {
  const intl = useIntl();
  const { data: classes, isLoading } = useGetClassesQuery();
  const dispatch = useAppDispatch();

  return (
    <Grid container spacing={2} columns={3}>
      <Grid size={1}>
        <FormControl className="w-full">
          <InputLabel>{intl.formatMessage({ id: "NEW_CHARACTER_CLASS" })}</InputLabel>
          <Select
            disabled={isLoading || !classes}
            defaultValue=""
            label={intl.formatMessage({ id: "NEW_CHARACTER_CLASS" })}
            onChange={(e) => {
              dispatch(newCharacterActions.setClassId(e.target.value));
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
        <NumberField
          className="w-full"
          label={intl.formatMessage({ id: "NEW_CHARACTER_LEVEL" })}
          min={1}
          max={20}
          step={1}
          defaultValue={1}
          onValueChange={(value) => dispatch(newCharacterActions.setLevel(value ?? 1))}
        />
      </Grid>

      <Grid size={1}>
        <NumberField
          className="w-full"
          label={intl.formatMessage({ id: "NEW_CHARACTER_ARMOR_CLASS" })}
          min={1}
          step={1}
          defaultValue={1}
          onValueChange={(value) => dispatch(newCharacterActions.setArmorClass(value ?? 1))}
        />
      </Grid>

      <Grid size={1}>
        <NumberField
          className="w-full"
          label={intl.formatMessage({ id: "NEW_CHARACTER_HITPOINTS" })}
          min={1}
          step={1}
          defaultValue={1}
          onValueChange={(value) => dispatch(newCharacterActions.setHitpoints(value ?? 1))}
        />
      </Grid>

      <Grid size={1}>
        <NumberField
          className="w-full"
          label={intl.formatMessage({ id: "NEW_CHARACTER_SPEED" })}
          min={1}
          step={1}
          defaultValue={30}
          onValueChange={(value) => dispatch(newCharacterActions.setSpeed(value ?? 1))}
        />
      </Grid>
    </Grid>
  );
}

export default CharacterBase;
