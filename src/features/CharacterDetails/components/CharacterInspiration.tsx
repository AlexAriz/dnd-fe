import useRequiredContext from "Hooks/useRequiredContext";
import ActiveCharacterContext from "../context/ActiveCharacterContext";
import WhatshotIcon from "@mui/icons-material/WhatshotTwoTone";
import ToggleButton from "@mui/material/ToggleButton";

function CharacterInspiration() {
  const character = useRequiredContext(ActiveCharacterContext);

  return (
    <ToggleButton value="inspiration" color="primary" size="large" selected={character.inspiration}>
      <WhatshotIcon />
    </ToggleButton>
  );
}

export default CharacterInspiration;
