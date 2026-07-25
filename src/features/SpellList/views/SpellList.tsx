import SpellsTable from "Components/SpellsTable";
import { useState } from "react";
import { useGetSpellsQuery } from "State/Spell";
import useSpellsTableColumns from "Hooks/useSpellsTableColumns";
import type { SpellSummary } from "State/Spell/type";
import SpellCard from "Components/SpellCard";
import { useGetCharactersQuery } from "State/Character";
import { DropdownMenu } from "@astryxdesign/core/DropdownMenu";
import { useLearnSpellMutation } from "State/CharacterSpells";

function SpellList() {
  const { data: spellSummaries, isLoading } = useGetSpellsQuery();
  const { data: characters, isLoading: isLoadingCharacters } = useGetCharactersQuery();
  const [activeSpell, setActiveSpell] = useState<SpellSummary>();
  const { columns, fields } = useSpellsTableColumns<SpellSummary>();
  const [learnSpell] = useLearnSpellMutation();

  return (
    <div className="flex flex-col-reverse md:flex-row h-full min-h-0">
      <div className="flex-1 overflow-auto">
        <SpellsTable
          activeSpell={activeSpell}
          fieldDefs={fields}
          setSpell={setActiveSpell}
          spells={spellSummaries}
          columns={columns}
          isLoading={isLoading}
        />
      </div>

      {activeSpell && (
        <div className="w-full md:w-1/3 h-1/2 md:h-full overflow-auto mb-3 md:mb-0 md:ml-3">
          {!isLoadingCharacters && characters && (
            <DropdownMenu
              button={{ label: "Add to" }}
              items={characters.map((character) => ({
                label: character.name,
                onClick: () => learnSpell({ characterId: character.id, spellId: activeSpell.id }),
              }))}
            />
          )}

          <SpellCard spellDetail={activeSpell.markdown} />
        </div>
      )}
    </div>
  );
}

export default SpellList;
