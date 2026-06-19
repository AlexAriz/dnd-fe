import useRequiredContext from "Hooks/useRequiredContext";
import ActiveCharacterContext from "../context/ActiveCharacterContext";
import WhatshotIcon from "@mui/icons-material/WhatshotTwoTone";
import ToggleButton from "@mui/material/ToggleButton";
import { usePatchCharacterMutation } from "State/Character";

function CharacterInspiration() {
  const character = useRequiredContext(ActiveCharacterContext);
  const [patchCharacter, { isLoading }] = usePatchCharacterMutation();
  const handleChange = async () => {
    await patchCharacter({ characterId: character.id, inspiration: !character.inspiration });
  };

  return (
    <ToggleButton
      value="inspiration"
      color="primary"
      size="large"
      selected={character.inspiration}
      onChange={handleChange}
      disabled={isLoading}
    >
      <WhatshotIcon />
    </ToggleButton>
  );
}

export default CharacterInspiration;
