import SpellsTable from "../components/SpellsTable";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import SpellDetails from "../components/SpellDetails";
import Divider from "@mui/material/Divider";

function SpellList() {
  const [spellId, setSpellId] = useState<string>();

  return (
    <Stack direction={{ xs: "column-reverse", md: "row" }} className="h-full min-h-0">
      <div className="flex-1 overflow-auto">
        <SpellsTable onSelectSpell={setSpellId} activeSpellId={spellId} />
      </div>

      {spellId && (
        <>
          <Divider sx={{ display: { xs: "block", md: "none" } }} />
          <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" } }} />
          <div className="w-full md:w-1/3 max-h-1/2 md:max-h-full overflow-auto mb-3 md:mb-0 md:ml-3">
            <SpellDetails spellId={spellId} />
          </div>
        </>
      )}
    </Stack>
  );
}

export default SpellList;
