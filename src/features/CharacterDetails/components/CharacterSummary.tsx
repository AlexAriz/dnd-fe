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
      <Stack direction={{ xs: "column", sm: "row" }} className="space-x-2 space-y-2">
        <Stack direction="row" className="grow space-x-2">
          <CharacterAvatar />

          <Stack className="grow">
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

          <Stack className="justify-center">
            <CharacterInspiration />
          </Stack>
        </Stack>

        <CharacterHealth />
      </Stack>

      <Stack direction="row">
        <Typography>Proficiency: {character.proficiencyBonus} | </Typography>
        <Typography>Speed: {character.speeds.walk} | </Typography>
        <Typography>Initiative: {character.initiative} | </Typography>
        <Typography>AC: {character.armorClass}</Typography>
      </Stack>
    </Stack>
  );
}

export default CharacterSummary;
