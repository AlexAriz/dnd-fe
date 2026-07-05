import useRequiredContext from "Hooks/useRequiredContext";
import ActiveCharacterContext from "../context/ActiveCharacterContext";
import { Icon } from "@astryxdesign/core/Icon";
import { FireIcon as FireIconOutline } from "@heroicons/react/24/outline";
import { FireIcon as FireIconSolid } from "@heroicons/react/24/solid";
import { ToggleButton } from "@astryxdesign/core/ToggleButton";
import { usePatchCharacterMutation } from "State/Character";
import { useIntl } from "react-intl";

function CharacterInspiration() {
  const intl = useIntl();
  const character = useRequiredContext(ActiveCharacterContext);
  const [patchCharacter] = usePatchCharacterMutation();
  const handleChange = async () => {
    await patchCharacter({ characterId: character.id, inspiration: !character.inspiration });
  };

  return (
    <ToggleButton
      label={intl.formatMessage({ id: "HEROIC_INSPIRATION" })}
      isIconOnly
      size="lg"
      pressedChangeAction={handleChange}
      isPressed={character.inspiration}
      icon={<Icon icon={FireIconOutline} />}
      pressedIcon={<Icon icon={FireIconSolid} />}
    />
  );
}

export default CharacterInspiration;
