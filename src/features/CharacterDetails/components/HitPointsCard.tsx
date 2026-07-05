import { Card } from "@astryxdesign/core/Card";
import { Text } from "@astryxdesign/core/Text";
import { useIntl } from "react-intl";
import useRequiredContext from "Hooks/useRequiredContext";
import ActiveCharacterContext from "../context/ActiveCharacterContext";
import { Layout, LayoutHeader, LayoutPanel } from "@astryxdesign/core/Layout";

function HitPointsCard() {
  const intl = useIntl();
  const character = useRequiredContext(ActiveCharacterContext);

  return (
    <Card>
      <Layout
        header={
          <LayoutHeader hasDivider className="text-center">
            <Text>{intl.formatMessage({ id: "HITPOINTS" })}</Text>
          </LayoutHeader>
        }
        start={
          <LayoutPanel width="50%" hasDivider className="text-end">
            <Text>{character.hitPoints.current}</Text>
          </LayoutPanel>
        }
        end={
          <LayoutPanel width="50%" className="text-start">
            <Text>{character.hitPoints.max}</Text>
          </LayoutPanel>
        }
      />
    </Card>
  );
}

export default HitPointsCard;
