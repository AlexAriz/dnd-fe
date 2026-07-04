import useRequiredContext from "Hooks/useRequiredContext";
import { getAbilityCheck, getAbilitySave } from "Rules/stats";
import type { StatSummary } from "State/Stats/type";
import ActiveCharacterContext from "../context/ActiveCharacterContext";
import { useIntl } from "react-intl";
import { Card } from "@astryxdesign/core/Card";
import { Layout, LayoutFooter, LayoutHeader, LayoutPanel, Stack } from "@astryxdesign/core/Layout";
import { Text } from "@astryxdesign/core/Text";

interface AbilityStatProps {
  stat: StatSummary;
}

function AbilityStat({ stat }: AbilityStatProps) {
  const intl = useIntl();
  const character = useRequiredContext(ActiveCharacterContext);

  return (
    <Card>
      <Layout
        header={
          <LayoutHeader hasDivider className="text-center">
            <Text>{stat.name}</Text>
          </LayoutHeader>
        }
        start={
          <LayoutPanel width="50%" hasDivider>
            <Stack align="end">
              <Text type="supporting">{intl.formatMessage({ id: "ABILITY_CHECK" })}</Text>
              <Text type="large">
                {intl.formatNumber(getAbilityCheck(character, stat.id), { signDisplay: "exceptZero" })}
              </Text>
            </Stack>
          </LayoutPanel>
        }
        end={
          <LayoutPanel width="50%">
            <Stack align="start">
              <Text type="supporting">{intl.formatMessage({ id: "ABILITY_SAVE" })}</Text>
              <Text type="large">
                {intl.formatNumber(getAbilitySave(character, stat.id), { signDisplay: "exceptZero" })}
              </Text>
            </Stack>
          </LayoutPanel>
        }
        footer={
          <LayoutFooter hasDivider className="text-center">
            <Text>{character.stats[stat.id].value}</Text>
          </LayoutFooter>
        }
      />
    </Card>
  );
}

export default AbilityStat;
