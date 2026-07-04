import { Grid } from "@astryxdesign/core/Grid";
import { useGetSkillsQuery } from "State/Skills";
import LoadingContent from "Components/LoadingContent";
import SkillStat from "./SkillStat";

function CharacterSkills() {
  const { data: skills, isLoading } = useGetSkillsQuery();

  if (isLoading || !skills) return <LoadingContent />;

  return (
    <Grid columns={2} gap={4}>
      {skills?.map((skill) => (
        <SkillStat key={skill.name} skill={skill} />
      ))}
    </Grid>
  );
}

export default CharacterSkills;
