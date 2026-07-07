import { Icon } from "@astryxdesign/core/Icon";
import { IconButton } from "@astryxdesign/core/IconButton";
import { Stack } from "@astryxdesign/core/Stack";
import { useAppDispatch, useAppSelector } from "Hooks/state";
import type { SkillSummary } from "State/Skills/type";
import { newCharacterActions, newCharacterSelectors } from "../store";
import { Text } from "@astryxdesign/core/Text";

interface SkillInputProps {
  skill: SkillSummary;
}

function SkillInput({ skill }: SkillInputProps) {
  const dispatch = useAppDispatch();
  const skillValue = useAppSelector((state) => newCharacterSelectors.selectSkill(state, skill.name));

  return (
    <Stack direction="horizontal" align="center" gap={1}>
      <IconButton
        label={skill.name}
        variant="ghost"
        icon={
          <Icon
            icon={
              skillValue.expertise ? "checkDouble"
              : skillValue.proficiency ?
                "check"
              : "close"
            }
          />
        }
        onClick={() => dispatch(newCharacterActions.toggleSkill(skill.name))}
      />
      <Text>
        {skill.name} ({skill.statId})
      </Text>
    </Stack>
  );
}

export default SkillInput;
