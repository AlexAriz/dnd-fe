import { useIntl } from "react-intl";
import type { GridColDef } from "@mui/x-data-grid";
import type { CharacterSpell } from "State/CharacterSpells/type";
import useSpellsTableColumns from "Hooks/useSpellsTableColumns";

function useCharacterSpellsColumns(): GridColDef<CharacterSpell>[] {
  const intl = useIntl();
  const baseColumns = useSpellsTableColumns<CharacterSpell>();

  return baseColumns.concat({
    field: "prepared",
    headerName: intl.formatMessage({ id: "PREPARED" }),
    align: "center",
    flex: 1,
    type: "boolean",
  });
}

export default useCharacterSpellsColumns;
