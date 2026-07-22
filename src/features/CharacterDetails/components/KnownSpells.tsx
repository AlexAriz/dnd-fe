import useRequiredContext from "Hooks/useRequiredContext";
import ActiveCharacterContext from "../context/ActiveCharacterContext";
import SpellsTable from "Components/SpellsTable";
import { useState } from "react";
import type { SpellSummary } from "State/Spell/type";
import SpellCard from "Components/SpellCard";
import useCharacterSpellsColumns from "../hooks/useCharacterSpellsColumns";
import { useGetKnownSpellsQuery } from "State/CharacterSpells";

function KnownSpells() {
  const character = useRequiredContext(ActiveCharacterContext);
  const { data: spells = [], isLoading } = useGetKnownSpellsQuery(character.id);
  const [activeSpell, setActiveSpell] = useState<SpellSummary>();
  const { columns, fields } = useCharacterSpellsColumns();

  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row h-full min-h-0">
        <div className="flex-1 overflow-auto">
          <SpellsTable
            activeSpell={activeSpell}
            fieldDefs={fields}
            setSpell={setActiveSpell}
            spells={spells}
            columns={columns}
            isLoading={isLoading}
          />
        </div>

        {activeSpell && (
          <div className="w-full md:w-1/3 h-1/2 md:h-full overflow-auto mb-3 md:mb-0 md:ml-3">
            <SpellCard spellDetail={activeSpell.markdown} />
          </div>
        )}
      </div>
    </div>
  );
}

export default KnownSpells;
