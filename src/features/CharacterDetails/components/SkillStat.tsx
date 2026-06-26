import useRequiredContext from "Hooks/useRequiredContext";
import type { SkillSummary } from "State/Skills/type";
import ActiveCharacterContext from "../context/ActiveCharacterContext";
import Typography from "@mui/material/Typography";
import DefaultIcon from "@mui/icons-material/StarBorder";
import ProficiencyIcon from "@mui/icons-material/Star";
import ExpertiseIcon from "@mui/icons-material/HotelClass";
import { getSkillCheck } from "Rules/stats";
import { useIntl } from "react-intl";

interface SkillStatProps {
  skill: SkillSummary;
}

function SkillStat({ skill }: SkillStatProps) {
  const intl = useIntl();
  const character = useRequiredContext(ActiveCharacterContext);

  return (
    <>
      {character.skills[skill.name].expertise ?
        <ExpertiseIcon />
      : character.skills[skill.name].proficiency ?
        <ProficiencyIcon />
      : <DefaultIcon />}
      <Typography>
        {intl.formatMessage(
          { id: "CHARACTER_SKILL" },
          { skill: skill.name, ability: skill.statId, check: getSkillCheck(character, skill) },
        )}
      </Typography>
    </>
  );
}

export default SkillStat;
