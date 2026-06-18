import Grid from "@mui/material/Grid";
import useRequiredContext from "Hooks/useRequiredContext";
import { useGetSkillsQuery } from "State/Skills";
import ActiveCharacterContext from "../context/ActiveCharacterContext";
import DefaultIcon from "@mui/icons-material/StarBorder";
import ProficiencyIcon from "@mui/icons-material/Star";
import ExpertiseIcon from "@mui/icons-material/HotelClass";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

function CharacterSkills() {
  const { data: skills, isLoading } = useGetSkillsQuery();
  const character = useRequiredContext(ActiveCharacterContext);

  if (isLoading || !skills) return <CircularProgress />;

  return (
    <Grid container spacing={4} columns={{ xs: 1, sm: 2 }}>
      {skills?.map((skill) => (
        <Grid size={1} key={skill.name} className="flex items-center">
          {character.skills[skill.name].expertise ?
            <ExpertiseIcon />
          : character.skills[skill.name].proficiency ?
            <ProficiencyIcon />
          : <DefaultIcon />}
          <Typography>
            {skill.name} ({skill.statId})
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}

export default CharacterSkills;
