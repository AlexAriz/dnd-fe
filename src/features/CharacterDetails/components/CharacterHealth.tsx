import useRequiredContext from "Hooks/useRequiredContext";
import ActiveCharacterContext from "../context/ActiveCharacterContext";
import { useIntl } from "react-intl";
import { useState } from "react";
import { usePatchCharacterMutation } from "State/Character";
import { Stack, StackItem } from "@astryxdesign/core/Stack";
import { Button } from "@astryxdesign/core/Button";
import { NumberInput } from "@astryxdesign/core/NumberInput";
import HitPointsCard from "./HitPointsCard";

function CharacterHealth() {
  const intl = useIntl();
  const [change, setChange] = useState<number | null>();
  const character = useRequiredContext(ActiveCharacterContext);
  const [patchCharacter] = usePatchCharacterMutation();

  const handleChange = async () => {
    if (!change) return;
    await patchCharacter({ characterId: character.id, hitpoints: change });
    setChange(0);
  };

  return (
    <Stack direction="horizontal" gap={2} wrap="nowrap" className="min-w-99">
      <StackItem>
        <Stack direction="vertical" className="w-33">
          <StackItem>
            <Button
              label={intl.formatMessage({ id: "HEAL" })}
              variant="primary"
              className="w-full"
              clickAction={handleChange}
              isDisabled={!change || change <= 0}
            />
          </StackItem>

          <StackItem>
            <NumberInput
              label={intl.formatMessage({ id: "HITPOINTS" })}
              isLabelHidden
              max={character.hitPoints.max - character.hitPoints.current}
              min={0 - character.hitPoints.current}
              step={1}
              value={change}
              onChange={setChange}
              hasClear
            />
          </StackItem>

          <StackItem>
            <Button
              label={intl.formatMessage({ id: "DAMAGE" })}
              variant="primary"
              className="w-full"
              clickAction={handleChange}
              isDisabled={!change || change >= 0}
            />
          </StackItem>
        </Stack>
      </StackItem>

      <StackItem size="fill">
        <HitPointsCard />
      </StackItem>
    </Stack>
  );
}

export default CharacterHealth;
