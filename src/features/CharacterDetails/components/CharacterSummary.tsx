import { Stack, StackItem } from "@astryxdesign/core/Stack";
import { Heading, Text } from "@astryxdesign/core/Text";
import { useIntl } from "react-intl";
import CharacterAvatar from "./CharacterAvatar";
import useRequiredContext from "Hooks/useRequiredContext";
import ActiveCharacterContext from "../context/ActiveCharacterContext";
import { List, ListItem } from "@astryxdesign/core/List";
import CharacterInspiration from "./CharacterInspiration";
import CharacterHealth from "./CharacterHealth";
import { Divider } from "@astryxdesign/core/Divider";
import { Spinner } from "@astryxdesign/core/Spinner";
import { useGetCharacterClassesQuery } from "State/CharacterClasses";

function CharacterSummary() {
  const character = useRequiredContext(ActiveCharacterContext);
  const { data: classes = [], isLoading: isLoadingClasses } = useGetCharacterClassesQuery(character.id);
  const intl = useIntl();

  return (
    <Stack gap={4}>
      <Stack direction="horizontal" gap={2} wrap="wrap">
        <StackItem>
          <CharacterAvatar />
        </StackItem>

        <StackItem size="fill">
          <Stack>
            <Heading level={1}>{character.name}</Heading>

            {isLoadingClasses && <Spinner />}
            <List density="compact">
              {classes.map((characterClass) => (
                <ListItem
                  key={characterClass.id}
                  className="pl-0"
                  label={intl.formatMessage(
                    { id: "CHARACTER_CLASS" },
                    { name: characterClass.name, level: characterClass.level, subclass: characterClass.subClass?.name },
                  )}
                />
              ))}
            </List>
          </Stack>
        </StackItem>

        <StackItem crossAlignSelf="center">
          <CharacterInspiration />
        </StackItem>

        <StackItem>
          <CharacterHealth />
        </StackItem>
      </Stack>

      <Stack direction="horizontal" justify="evenly">
        <StackItem>
          <Stack align="center" gap={2}>
            <Text type="supporting">{intl.formatMessage({ id: "PROFICIENCY_BONUS" })}</Text>
            <Text type="large">{intl.formatNumber(character.proficiencyBonus, { signDisplay: "exceptZero" })}</Text>
          </Stack>
        </StackItem>

        <Divider orientation="vertical" className="self-stretch h-auto" />

        <StackItem>
          <Stack align="center" gap={2}>
            <Text type="supporting">{intl.formatMessage({ id: "SPEED" })}</Text>
            <Text type="large">{character.speeds.walk}</Text>
          </Stack>
        </StackItem>

        <Divider orientation="vertical" className="self-stretch h-auto" />

        <StackItem>
          <Stack align="center" gap={2}>
            <Text type="supporting">{intl.formatMessage({ id: "INITIATIVE" })}</Text>
            <Text type="large">
              {intl.formatNumber(character.initiative, {
                signDisplay: "exceptZero",
              })}
            </Text>
          </Stack>
        </StackItem>

        <Divider orientation="vertical" className="self-stretch h-auto" />

        <StackItem>
          <Stack align="center" gap={2}>
            <Text type="supporting">{intl.formatMessage({ id: "ARMOR_CLASS" })}</Text>
            <Text type="large">{character.armorClass}</Text>
          </Stack>
        </StackItem>
      </Stack>
    </Stack>
  );
}

export default CharacterSummary;
