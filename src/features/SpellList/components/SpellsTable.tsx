import { DataGrid, gridClasses } from "@mui/x-data-grid";
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
      sx={{
        [`& .${gridClasses.row}:hover`]: {
          cursor: "pointer",
        },
        [`& .${gridClasses.cell}:focus, & .${gridClasses.cell}:focus-within`]: {
          outline: "none",
        },
        [`& .${gridClasses.columnHeader}:focus, & .${gridClasses.columnHeader}:focus-within`]: {
          outline: "none",
        },
      }}
      slotProps={{
        loadingOverlay: {
          variant: "skeleton",
          noRowsVariant: "skeleton",
        },
        toolbar: {
          csvOptions: { disableToolbarButton: true },
          printOptions: { disableToolbarButton: true },
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
