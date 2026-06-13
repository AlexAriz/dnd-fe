import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useGetSkillsQuery } from "State/Skills";
import { newCharacterActions, newCharacterSelectors } from "../store";
import { useAppDispatch, useAppSelector } from "Hooks/state";
import DefaultIcon from "@mui/icons-material/StarBorder";
import ProficiencyIcon from "@mui/icons-material/Star";
import ExpertiseIcon from "@mui/icons-material/HotelClass";

function SkillsSection() {
  const dispatch = useAppDispatch();
  const { data: skills, isLoading } = useGetSkillsQuery();
  const characterSkills = useAppSelector(newCharacterSelectors.selectSkills);

  if (isLoading || !skills) return <CircularProgress />;

  return (
    <Grid container spacing={2} columns={2}>
      {skills.map((skill) => (
        <Grid size={1} key={skill.name} className="flex items-center">
          <IconButton onClick={() => dispatch(newCharacterActions.toggleSkill(skill.name))}>
            {characterSkills[skill.name].expertise ?
              <ExpertiseIcon />
            : characterSkills[skill.name].proficiency ?
              <ProficiencyIcon />
            : <DefaultIcon />}
          </IconButton>
          <Typography>
            {skill.name} ({skill.statId})
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}

export default SkillsSection;
