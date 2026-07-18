import useRequiredContext from "Hooks/useRequiredContext";
import type { SkillSummary } from "State/Skills/type";
import ActiveCharacterContext from "../context/ActiveCharacterContext";
import { Text } from "@astryxdesign/core/Text";
import { Icon } from "@astryxdesign/core/Icon";
import { useIntl } from "react-intl";
import { useGetCharacterSkillsQuery } from "State/CharacterSkills";
import LoadingContent from "Components/LoadingContent";

interface SkillStatProps {
  skill: SkillSummary;
}

function SkillStat({ skill }: SkillStatProps) {
  const intl = useIntl();
  const character = useRequiredContext(ActiveCharacterContext);
  const { data: skills, isLoading } = useGetCharacterSkillsQuery(character.id);

  if (!skills?.[skill.name] || isLoading) return <LoadingContent />;

  const icon =
    skills[skill.name].expertise ? "checkDouble"
    : skills[skill.name].proficiency ? "check"
    : "close";

  return (
    <div className="flex items-center space-x-2">
      <Icon icon={icon} size="sm" />
      <Text>
        {intl.formatMessage(
          { id: "CHARACTER_SKILL" },
          {
            skill: skill.name,
            ability: skill.statId,
            check: skills[skill.name].check,
          },
        )}
      </Text>
    </div>
  );
}

export default SkillStat;
