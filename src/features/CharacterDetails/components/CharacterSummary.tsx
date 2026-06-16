import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useIntl } from "react-intl";
import CharacterAvatar from "./CharacterAvatar";
import useRequiredContext from "Hooks/useRequiredContext";
import ActiveCharacterContext from "../context/ActiveCharacterContext";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import CharacterInspiration from "./CharacterInspiration";
import CharacterHealth from "./CharacterHealth";

function CharacterSummary() {
  const character = useRequiredContext(ActiveCharacterContext);
  const intl = useIntl();

  return (
    <Stack spacing="2" className="pt-2">
      <Stack direction="row">
        <Stack direction="row" className="grow space-x-2">
          <CharacterAvatar />

          <Stack>
            <Typography variant="h5">{character.name}</Typography>

            <List dense>
              {character.classes.map((characterClass) => (
                <ListItem key={characterClass.id} disableGutters>
                  {intl.formatMessage(
                    { id: "CHARACTER_CLASS" },
                    { name: characterClass.name, level: characterClass.level },
                  )}
                </ListItem>
              ))}
            </List>
          </Stack>
        </Stack>

        <Stack direction="row" className="items-center space-x-2">
          <CharacterInspiration />

          <CharacterHealth />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default CharacterSummary;
