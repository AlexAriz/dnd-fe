import LoadingContent from "Components/LoadingContent";
import { useGetSkillsQuery } from "State/Skills";
import { Grid, GridSpan } from "@astryxdesign/core/Grid";
import SkillInput from "./SkillInput";

function SkillsSection() {
  const { data: skills, isLoading } = useGetSkillsQuery();

  if (isLoading || !skills) return <LoadingContent />;

  return (
    <Grid columns={2} gap={4}>
      {skills.map((skill) => (
        <GridSpan key={skill.name} columns={1}>
          <SkillInput skill={skill} />
        </GridSpan>
      ))}
    </Grid>
  );
}

export default SkillsSection;
