import useRequiredContext from "Hooks/useRequiredContext";
import { getAbilityCheck, getAbilitySave } from "Rules/stats";
import type { StatSummary } from "State/Stats/type";
import ActiveCharacterContext from "../context/ActiveCharacterContext";
import { useIntl } from "react-intl";
import { Card } from "@astryxdesign/core/Card";
import { Stack, StackItem } from "@astryxdesign/core/Layout";
import { Text } from "@astryxdesign/core/Text";
import { Divider } from "@astryxdesign/core/Divider";

interface AbilityStatProps {
  stat: StatSummary;
}

function AbilityStat({ stat }: AbilityStatProps) {
  const intl = useIntl();
  const character = useRequiredContext(ActiveCharacterContext);

  return (
    <Card>
      <Stack direction="vertical" align="center" gap={2}>
        <StackItem>
          <Text>{stat.name}</Text>
        </StackItem>

        <Divider isFullBleed orientation="horizontal" />

        <StackItem>
          <Stack direction="horizontal" gap={4}>
            <StackItem size="fill">
              <Stack align="end">
                <Text type="supporting">{intl.formatMessage({ id: "ABILITY_CHECK" })}</Text>
                <Text type="large">
                  {intl.formatNumber(getAbilityCheck(character, stat.id), { signDisplay: "exceptZero" })}
                </Text>
              </Stack>
            </StackItem>

            <Divider isFullBleed orientation="vertical" className="self-stretch h-auto" />

            <StackItem size="fill">
              <Stack align="start">
                <Text type="supporting">{intl.formatMessage({ id: "ABILITY_SAVE" })}</Text>
                <Text type="large">
                  {intl.formatNumber(getAbilitySave(character, stat.id), { signDisplay: "exceptZero" })}
                </Text>
              </Stack>
            </StackItem>
          </Stack>
        </StackItem>

        <Divider isFullBleed orientation="horizontal" />

        <StackItem>
          <Text>{character.stats[stat.id].value}</Text>
        </StackItem>
      </Stack>
    </Card>
  );
}

export default AbilityStat;
