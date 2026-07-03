import { Icon } from "@astryxdesign/core/Icon";
import type { FieldDefinition } from "@astryxdesign/core/PowerSearch";
import type { TableColumn } from "@astryxdesign/core/Table";
import { MagicSchools } from "Constants/magic";
import { useIntl } from "react-intl";
import type { SpellSummary } from "State/Spell/type";

function useSpellsTableColumns<T extends SpellSummary>(): {
  columns: TableColumn<T>[];
  fields: ReadonlyArray<FieldDefinition>;
} {
  const intl = useIntl();

  const columns: TableColumn<T>[] = [
    {
      key: "name",
      header: intl.formatMessage({ id: "NAME" }),
      sortable: true,
    },
    {
      key: "magicSchool",
      header: intl.formatMessage({ id: "SCHOOL" }),
      sortable: true,
      renderCell: (spellSummary) => spellSummary.magicSchool,
    },
    {
      key: "level",
      header: intl.formatMessage({ id: "LEVEL" }),
      sortable: true,
      renderCell: (spellSummary) =>
        intl.formatMessage(
          { id: "SPELL_LEVEL" },
          { level: spellSummary.level, ritual: spellSummary.ritual.toString() },
        ),
    },
    {
      key: "concentration",
      header: intl.formatMessage({ id: "CONCENTRATION" }),
      sortable: true,
      renderCell: (spellSummary) => <Icon icon={spellSummary.concentration ? "check" : "close"} />,
    },
  ];
  const fields: ReadonlyArray<FieldDefinition> = [
    { key: "name", type: "string", label: intl.formatMessage({ id: "NAME" }) },
    {
      key: "magicSchool",
      type: "enum",
      label: intl.formatMessage({ id: "SCHOOL" }),
      enumValues: Object.values(MagicSchools).map((value) => ({ value, label: value })),
    },
    { key: "level", type: "number", label: intl.formatMessage({ id: "LEVEL" }) },
    {
      key: "concentration",
      type: "boolean",
      label: intl.formatMessage({ id: "CONCENTRATION" }),
    },
    {
      key: "ritual",
      type: "boolean",
      label: intl.formatMessage({ id: "RITUAL" }),
    },
  ] as const;

  return {
    columns,
    fields,
  };
}

export default useSpellsTableColumns;
