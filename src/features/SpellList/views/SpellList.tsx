import SpellsTable from "Components/SpellsTable";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import Divider from "@mui/material/Divider";
import { useGetSpellsQuery } from "State/Spell";
import useSpellsTableColumns from "Hooks/useSpellsTableColumns";
import type { SpellSummary } from "State/Spell/type";
import SpellCard from "Components/SpellCard";

function SpellList() {
  const { data: spellSummaries, isLoading } = useGetSpellsQuery();
  const [spellId, setSpellId] = useState<string>();
  const [activeSpell, setActiveSpell] = useState<SpellSummary>();
  const columns = useSpellsTableColumns<SpellSummary>();

  return (
    <Stack direction={{ xs: "column-reverse", md: "row" }} className="h-full min-h-0">
      <div className="flex-1 overflow-auto">
        <SpellsTable
          onSelectSpell={(spellId) => {
            setSpellId(spellId);
            setActiveSpell(spellSummaries?.find((spell) => spell.id === spellId));
          }}
          activeSpellId={spellId}
          spells={spellSummaries}
          columns={columns}
          loading={isLoading}
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

export default SpellList;
