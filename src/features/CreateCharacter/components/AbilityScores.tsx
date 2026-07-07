import { useAppSelector } from "Hooks/state";
import { useGetStatsQuery } from "State/Stats";
import { newCharacterSelectors } from "../store";
import StatInput from "./StatInput";
import StatBonusInput from "./StatBonusInput";
import StatBonusDisplay from "./StatBonusDisplay";
import { useIntl } from "react-intl";
import LoadingContent from "Components/LoadingContent";
import { Grid } from "@astryxdesign/core/Grid";
import { Stack, StackItem } from "@astryxdesign/core/Stack";
import { Heading } from "@astryxdesign/core/Heading";

function AbilityScores() {
  const intl = useIntl();
  const { data: stats, isLoading } = useGetStatsQuery();
  const statBonuses = useAppSelector(newCharacterSelectors.selectStatBonuses);

  if (isLoading || !stats) return <LoadingContent />;

  return (
    <Stack gap={2}>
      <StackItem>
        <Heading level={4}>{intl.formatMessage({ id: "SCORES" })}</Heading>
      </StackItem>

      <StackItem>
        <Grid columns={3} gap={2}>
          {stats.map((stat) => (
            <StatInput key={stat.id} statSummary={stat} />
          ))}
        </Grid>
      </StackItem>

      <StackItem>
        <Heading level={4}>{intl.formatMessage({ id: "BONUS" }, { count: 0 })}</Heading>
      </StackItem>

      {statBonuses.map((statBonus, index) => (
        <StackItem key={`${statBonus.name}:${index}`}>
          <StatBonusDisplay key={`${statBonus.name}:${index}`} index={index} statBonus={statBonus} />
        </StackItem>
      ))}

      <StackItem>
        <StatBonusInput />
      </StackItem>
    </Stack>
  );
}

export default AbilityScores;
