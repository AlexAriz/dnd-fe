import { DataGrid, gridClasses, type GridColDef } from "@mui/x-data-grid";
import type { BaseSpell } from "Types/spell";

interface SpellsTableProps<T extends BaseSpell> {
  activeSpellId?: string;
  onSelectSpell: (spellId: string | undefined) => void;
  spells?: T[];
  columns: GridColDef<T>[];
  loading?: boolean;
}

function SpellsTable<T extends BaseSpell>({
  activeSpellId,
  onSelectSpell,
  spells,
  columns,
  loading = false,
}: SpellsTableProps<T>) {
  return (
    <DataGrid<T>
      density="compact"
      showToolbar
      showCellVerticalBorder
      showColumnVerticalBorder
      disableColumnMenu
      disableColumnSelector
      disableColumnResize
      rowHeight={32}
      loading={loading}
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
      rows={spells}
      columns={columns}
      onRowClick={(params) => {
        const spellId = params.id as T["id"];
        onSelectSpell(spellId === activeSpellId ? undefined : spellId);
      }}
    />
  );
}

export default SpellsTable;
