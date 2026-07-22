import React from "react";
import { Collapsible, CollapsibleGroup } from "@astryxdesign/core/Collapsible";
import { Card } from "@astryxdesign/core/Card";
import useRequiredContext from "Hooks/useRequiredContext";
import ActiveCharacterContext from "../context/ActiveCharacterContext";
import SpellCard from "Components/SpellCard";
import type { SpellSummary } from "State/Spell/type";
import { useIntl } from "react-intl";
import { useGetKnownSpellsQuery } from "State/CharacterSpells";
import { Stack } from "@astryxdesign/core/Stack";
import { Divider } from "@astryxdesign/core/Divider";

function PreparedSpells() {
  const intl = useIntl();
  const character = useRequiredContext(ActiveCharacterContext);
  const { data: spells = [] } = useGetKnownSpellsQuery(character.id);

  const spellHash: Record<number, SpellSummary[]> = spells
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
      {} as Record<number, SpellSummary[]>,
    );

  return (
    <CollapsibleGroup type="multiple" defaultValue={Object.keys(spellHash)}>
      <Card>
        <Stack gap={3}>
          {Object.entries(spellHash).map(([level, spells], index, array) => (
            <React.Fragment key={level}>
              <Collapsible trigger={intl.formatMessage({ id: "SPELL_DETAIL_LEVEL" }, { level })} value={level}>
                <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-x-4 space-y-4">
                  {spells.map((spell) => (
                    <Card key={spell.id} className="inline-block">
                      <SpellCard spellDetail={spell.markdown} />
                    </Card>
                  ))}
                </div>
              </Collapsible>
              {array.length !== index + 1 && <Divider isFullBleed />}
            </React.Fragment>
          ))}
        </Stack>
      </Card>
    </CollapsibleGroup>
  );
}

export default PreparedSpells;
