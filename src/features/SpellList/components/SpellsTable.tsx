import { DataGrid } from "@mui/x-data-grid";
import type { SpellSummary } from "State/Spell/type";
import { useGetSpellsQuery } from "State/Spell";
import useSpellColumns from "../hooks/useSpellColumns";

interface SpellsTableProps {
  activeSpellId?: string;
  onSelectSpell: (spellId: string | undefined) => void;
}

function SpellsTable({ activeSpellId, onSelectSpell }: SpellsTableProps) {
  const { data: spellSummaries, isLoading } = useGetSpellsQuery();
  const columns = useSpellColumns();

  return (
    <DataGrid<SpellSummary>
      density="compact"
      showToolbar
      showCellVerticalBorder
      showColumnVerticalBorder
      disableColumnMenu
      disableColumnSelector
      disableColumnResize
      rowHeight={32}
      loading={isLoading}
      slotProps={{
        loadingOverlay: {
          variant: "skeleton",
          noRowsVariant: "skeleton",
        },
      }}
      rows={spellSummaries}
      columns={columns}
      onRowClick={(params) => {
        const spellId = params.id as SpellSummary["id"];
        onSelectSpell(spellId === activeSpellId ? undefined : spellId);
      }}
    />
  );
}

export default SpellsTable;
