import useRequiredContext from "Hooks/useRequiredContext";
import ActiveCharacterContext from "../context/ActiveCharacterContext";
import SpellsTable from "Components/SpellsTable";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import SpellDetails from "Features/SpellList/components/SpellDetails";
import useCharacterSpellsColumns from "../hooks/useCharacterSpellsColumns";

function CharacterSpells() {
  const character = useRequiredContext(ActiveCharacterContext);
  const [spellId, setSpellId] = useState<string>();
  const columns = useCharacterSpellsColumns();

  return (
    <Stack direction={{ xs: "column-reverse", md: "row" }} className="h-full min-h-0">
      <div className="flex-1 overflow-auto">
        <SpellsTable onSelectSpell={setSpellId} activeSpellId={spellId} spells={character.spells} columns={columns} />
      </div>

      {spellId && (
        <>
          <Divider sx={{ display: { xs: "block", md: "none" } }} />
          <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" } }} />
          <div className="w-full md:w-1/3 h-1/2 md:h-full overflow-auto mb-3 md:mb-0 md:ml-3">
            <SpellDetails spellId={spellId} />
          </div>
        </>
      )}
    </Stack>
  );
}

export default CharacterSpells;
