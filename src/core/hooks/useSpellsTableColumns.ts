import { useIntl } from "react-intl";
import type { GridColDef } from "@mui/x-data-grid";
import { MagicSchools } from "Constants/magic";
import type { BaseSpell } from "Types/spell";

function useSpellsTableColumns<T extends BaseSpell>(): GridColDef<T>[] {
  const intl = useIntl();

  return [
    {
      field: "name",
      headerName: intl.formatMessage({ id: "NAME" }),
      align: "left",
      flex: 1,
    },
    {
      field: "magicSchool",
      headerName: intl.formatMessage({ id: "SCHOOL" }),
      align: "center",
      flex: 1,
      type: "singleSelect",
      valueOptions: Object.values(MagicSchools),
      valueGetter: (_value, spellSummary) => spellSummary.magicSchool.name,
    },
    {
      field: "level",
      headerName: intl.formatMessage({ id: "LEVEL" }),
      align: "center",
      flex: 1,
      type: "number",
      valueFormatter: (_value, spellSummary) =>
        intl.formatMessage(
          { id: "SPELL_LEVEL" },
          { level: spellSummary.level, ritual: spellSummary.ritual.toString() },
        ),
    },
    {
      field: "concentration",
      headerName: intl.formatMessage({ id: "CONCENTRATION" }),
      align: "center",
      flex: 1,
      type: "boolean",
    },
  ];
}

export default useSpellsTableColumns;
