import { useIntl } from "react-intl";
import type { GridColDef } from "@mui/x-data-grid";
import type { SpellSummary } from "State/Spell/type";
import { MagicSchools } from "Constants/magic";

function useSpellColumns(): GridColDef<SpellSummary>[] {
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
      type: "singleSelect",
      valueOptions: [
        { value: 0, label: "Cantrip" },
        { value: 1, label: 1 },
        { value: 2, label: 2 },
        { value: 3, label: 3 },
        { value: 4, label: 4 },
        { value: 5, label: 5 },
        { value: 6, label: 6 },
        { value: 7, label: 7 },
        { value: 8, label: 8 },
        { value: 9, label: 9 },
      ],
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

export default useSpellColumns;
