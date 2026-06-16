import TextField from "@mui/material/TextField";
import { useAppDispatch } from "Hooks/state";
import { useIntl } from "react-intl";
import { newCharacterActions } from "../store";
import CharacterAvatar from "./CharacterAvatar";

interface CharacterIdentityProps {
  setFile: (file: File) => void;
}

function CharacterIdentity({ setFile }: CharacterIdentityProps) {
  const intl = useIntl();
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center space-x-2 my-2">
      <CharacterAvatar setFile={setFile} />

      <TextField
        className="max-w-xl grow"
        label={intl.formatMessage({ id: "NAME" })}
        onChange={(e) => dispatch(newCharacterActions.setName(e.target.value))}
      />
    </div>
  );
}

export default CharacterIdentity;
