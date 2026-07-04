import { Collapsible, CollapsibleGroup } from "@astryxdesign/core/Collapsible";
import { Card } from "@astryxdesign/core/Card";
import useRequiredContext from "Hooks/useRequiredContext";
import ActiveCharacterContext from "../context/ActiveCharacterContext";
import SpellCard from "Components/SpellCard";
import type { CharacterSpell } from "State/CharacterSpells/type";
import { useIntl } from "react-intl";
import { useGetCharacterSpellsQuery } from "State/CharacterSpells";
import { Stack } from "@astryxdesign/core/Stack";

function PreparedSpells() {
  const intl = useIntl();
  const character = useRequiredContext(ActiveCharacterContext);
  const { data: spells = [] } = useGetCharacterSpellsQuery(character.id);

  const spellHash: Record<number, CharacterSpell[]> = spells
    .filter((spell) => spell.prepared)
    .reduce(
      (hash, spell) => {
        if (hash[spell.level]) {
          return {
            ...hash,
            [spell.level]: hash[spell.level].concat(spell),
          };
        } else {
          return {
            ...hash,
            [spell.level]: [spell],
          };
        }
      },
      {} as Record<number, CharacterSpell[]>,
    );

  return (
    <CollapsibleGroup type="multiple" defaultValue={Object.keys(spellHash)}>
      <Card>
        <Stack gap={3}>
          {Object.entries(spellHash).map(([level, spells]) => (
            <Collapsible
              key={level}
              trigger={intl.formatMessage({ id: "SPELL_DETAIL_LEVEL" }, { level })}
              value={level}
            >
              <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-x-4 space-y-4">
                {spells.map((spell) => (
                  <Card key={spell.id} className="inline-block">
                    <SpellCard spellDetail={spell.markdown} />
                  </Card>
                ))}
              </div>
            </Collapsible>
          ))}
        </Stack>
      </Card>
    </CollapsibleGroup>
  );
}

export default PreparedSpells;
