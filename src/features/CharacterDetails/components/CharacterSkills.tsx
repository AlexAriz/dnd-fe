import Grid from "@mui/material/Grid";
import { useGetSkillsQuery } from "State/Skills";
import CircularProgress from "@mui/material/CircularProgress";
import SkillStat from "./SkillStat";

function CharacterSkills() {
  const { data: skills, isLoading } = useGetSkillsQuery();

  if (isLoading || !skills) return <CircularProgress />;

  return (
    <Grid container spacing={4} columns={{ xs: 1, sm: 2 }}>
      {skills?.map((skill) => (
        <Grid size={1} key={skill.name} className="flex items-center">
          <SkillStat skill={skill} />
        </Grid>
      ))}
    </Grid>
  );
}

export default CharacterSkills;
