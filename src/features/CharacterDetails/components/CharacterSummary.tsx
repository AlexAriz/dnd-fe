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
import Divider from "@mui/material/Divider";

function CharacterSummary() {
  const character = useRequiredContext(ActiveCharacterContext);
  const intl = useIntl();

  return (
    <Stack className="pt-2 space-y-4">
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

      <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} className="justify-evenly">
        <Stack className="space-y-2">
          <Typography align="center">{intl.formatMessage({ id: "PROFICIENCY_BONUS" })}</Typography>
          <Typography align="center">{character.proficiencyBonus}</Typography>
        </Stack>

        <Stack className="space-y-2">
          <Typography align="center">{intl.formatMessage({ id: "SPEED" })}</Typography>
          <Typography align="center">{character.speeds.walk}</Typography>
        </Stack>

        <Stack className="space-y-2">
          <Typography align="center">{intl.formatMessage({ id: "INITIATIVE" })}</Typography>
          <Typography align="center">{character.initiative}</Typography>
        </Stack>

        <Stack className="space-y-2">
          <Typography align="center">{intl.formatMessage({ id: "ARMOR_CLASS" })}</Typography>
          <Typography align="center">{character.armorClass}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default CharacterSummary;
