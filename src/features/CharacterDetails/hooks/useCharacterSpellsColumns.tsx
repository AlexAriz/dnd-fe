import { useIntl } from "react-intl";
import type { CharacterSpell } from "State/CharacterSpells/type";
import useSpellsTableColumns from "Hooks/useSpellsTableColumns";
import type { TableColumn } from "@astryxdesign/core/Table";
import type { FieldDefinition } from "@astryxdesign/core/PowerSearch";
import { Icon } from "@astryxdesign/core/Icon";

function useCharacterSpellsColumns(): {
  columns: TableColumn<CharacterSpell>[];
  fields: ReadonlyArray<FieldDefinition>;
} {
  const intl = useIntl();
  const { columns: baseColumns, fields: baseFields } = useSpellsTableColumns<CharacterSpell>();

  return {
    fields: baseFields.concat({
      key: "prepared",
      type: "boolean",
      label: intl.formatMessage({ id: "PREPARED" }),
    }),
    columns: baseColumns.concat({
      key: "prepared",
      header: intl.formatMessage({ id: "PREPARED" }),
      sortable: true,
      renderCell: (spell) => <Icon icon={spell.prepared ? "check" : "close"} />,
    }),
  };
}

export default useCharacterSpellsColumns;
