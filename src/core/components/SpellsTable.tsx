import {
  PowerSearch,
  usePowerSearchConfig,
  type FieldDefinition,
  type PowerSearchFilter,
} from "@astryxdesign/core/PowerSearch";
import { Stack } from "@astryxdesign/core/Stack";
import { Table, useTableSortable, useTableSortableState, type TableColumn } from "@astryxdesign/core/Table";
import useTableClick from "Hooks/useTableClick";
import { useState } from "react";
import type { SpellSummary } from "State/Spell/type";

interface SpellsTableProps<T extends SpellSummary> {
  spells?: T[];
  columns: TableColumn<T>[];
  fieldDefs: ReadonlyArray<FieldDefinition>;
  setSpell: (spell: T | undefined) => void;
  activeSpellId?: string;
}

function SpellsTable<T extends SpellSummary>({
  spells = [],
  columns,
  fieldDefs,
  setSpell,
  activeSpellId,
}: SpellsTableProps<T>) {
  const [filters, setFilters] = useState<PowerSearchFilter[]>([]);
  const { config, applyFilters } = usePowerSearchConfig(fieldDefs);
  const filteredSpells = applyFilters(filters, spells);

  const { sortedData: sortedSpells, sortConfig } = useTableSortableState<T>({
    data: filteredSpells,
    defaultSort: [{ sortKey: "name", direction: "ascending" }],
  });
  const sortablePlugin = useTableSortable<T>(sortConfig);

  const onRowClick = (spell: T) => {
    if (spell.id === activeSpellId) {
      setSpell(undefined);
    } else {
      setSpell(spell);
    }
  };
  const clickablePlugin = useTableClick<T>(onRowClick);

  return (
    <Stack gap={4}>
      <PowerSearch
        config={config}
        filters={filters}
        onChange={(newFilters) => setFilters([...newFilters])}
        resultCount={filteredSpells.length}
      />
      <Table
        data={sortedSpells}
        columns={columns}
        plugins={{ sortable: sortablePlugin, clickable: clickablePlugin }}
        density="compact"
        dividers="grid"
        hasHover
        scrollWrapper={undefined}
      />
    </Stack>
  );
}

export default SpellsTable;
