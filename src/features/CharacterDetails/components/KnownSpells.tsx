import useRequiredContext from "Hooks/useRequiredContext";
import ActiveCharacterContext from "../context/ActiveCharacterContext";
import SpellsTable from "Components/SpellsTable";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import type { CharacterSpell } from "State/CharacterSpells/type";
import SpellCard from "Components/SpellCard";
import useCharacterSpellsColumns from "../hooks/useCharacterSpellsColumns";
import { useGetCharacterSpellsQuery } from "State/CharacterSpells";

function KnownSpells() {
  const character = useRequiredContext(ActiveCharacterContext);
  const { data: spells = [] } = useGetCharacterSpellsQuery(character.id);
  const [spellId, setSpellId] = useState<string>();
  const [activeSpell, setActiveSpell] = useState<CharacterSpell>();
  const columns = useCharacterSpellsColumns();

  return (
    <Stack direction={{ xs: "column-reverse", md: "row" }} className="h-full min-h-0">
      <div className="flex-1 overflow-auto">
        <SpellsTable
          onSelectSpell={(spellId) => {
            setSpellId(spellId);
            setActiveSpell(spells?.find((spell) => spell.id === spellId));
          }}
          activeSpellId={spellId}
          spells={spells}
          columns={columns}
        />
      </div>

      {activeSpell && (
        <>
          <Divider sx={{ display: { xs: "block", md: "none" } }} />
          <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" } }} />
          <div className="w-full md:w-1/3 h-1/2 md:h-full overflow-auto mb-3 md:mb-0 md:ml-3">
            <SpellCard spellDetail={activeSpell.markdown} />
          </div>
        </>
      )}
    </Stack>
  );
}

export default KnownSpells;
