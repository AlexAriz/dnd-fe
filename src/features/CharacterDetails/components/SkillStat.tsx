import useRequiredContext from "Hooks/useRequiredContext";
import type { SkillSummary } from "State/Skills/type";
import ActiveCharacterContext from "../context/ActiveCharacterContext";
import { Text } from "@astryxdesign/core/Text";
import { Icon } from "@astryxdesign/core/Icon";
import { getSkillCheck } from "Rules/stats";
import { useIntl } from "react-intl";

interface SkillStatProps {
  skill: SkillSummary;
}

function SkillStat({ skill }: SkillStatProps) {
  const intl = useIntl();
  const character = useRequiredContext(ActiveCharacterContext);
  const icon =
    character.skills[skill.name].expertise ? "checkDouble"
    : character.skills[skill.name].proficiency ? "check"
    : "close";

  return (
    <div className="flex items-center space-x-2">
      <Icon icon={icon} size="sm" />
      <Text>
        {intl.formatMessage(
          { id: "CHARACTER_SKILL" },
          { skill: skill.name, ability: skill.statId, check: getSkillCheck(character, skill) },
        )}
      </Text>
    </div>
  );
}

export default SkillStat;
