import TextField from "@mui/material/TextField";
import { useAppDispatch } from "Hooks/state";
import { useIntl } from "react-intl";
import { newCharacterActions } from "../store";
import CharacterAvatar from "./CharacterAvatar";
import NumberField from "Components/NumberField";
import Grid from "@mui/material/Grid";

interface CharacterIdentityProps {
  setFile: (file: File) => void;
}

function CharacterIdentity({ setFile }: CharacterIdentityProps) {
  const intl = useIntl();
  const dispatch = useAppDispatch();

  return (
    <Grid container columns={{ xs: 3, md: 6 }} spacing={2} className="my-2 items-center">
      <Grid size={3} className="flex items-center space-x-2">
        <CharacterAvatar setFile={setFile} />
        <TextField
          className="grow"
          label={intl.formatMessage({ id: "NAME" })}
          onChange={(e) => dispatch(newCharacterActions.setName(e.target.value))}
        />
      </Grid>

      <Grid size={1}>
        <NumberField
          className="w-full"
          label={intl.formatMessage({ id: "ARMOR_CLASS" })}
          min={1}
          step={1}
          defaultValue={1}
          onValueChange={(value) => dispatch(newCharacterActions.setArmorClass(value ?? 1))}
        />
      </Grid>

      <Grid size={1}>
        <NumberField
          className="w-full"
          label={intl.formatMessage({ id: "HITPOINTS" })}
          min={1}
          step={1}
          defaultValue={1}
          onValueChange={(value) => dispatch(newCharacterActions.setHitpoints(value ?? 1))}
        />
      </Grid>

      <Grid size={1}>
        <NumberField
          className="w-full"
          label={intl.formatMessage({ id: "SPEED" })}
          min={1}
          step={1}
          defaultValue={30}
          onValueChange={(value) => dispatch(newCharacterActions.setSpeed(value ?? 1))}
        />
      </Grid>
    </Grid>
  );
}

export default CharacterIdentity;
