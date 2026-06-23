import { useState } from "react";
import { useIntl } from "react-intl";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableSortLabel from "@mui/material/TableSortLabel";
import CheckIcon from "@mui/icons-material/Check";
import CircularProgress from "@mui/material/CircularProgress";
import type { SortableColumns, SortOrder } from "../types/type";
import { Columns, Order } from "../constants/sorting";
import { useGetSpellsQuery } from "State/Spell";

interface SpellsTableProps {
  activeSpellId?: string;
  onSelectSpell: (spellId: string) => void;
}

function SpellsTable({ activeSpellId, onSelectSpell }: SpellsTableProps) {
  const intl = useIntl();
  const [sortBy, setSortBy] = useState<SortableColumns>(Columns.NAME);
  const [sortOrder, setSortOrder] = useState<SortOrder>(Order.ASC);
  const { data: spellSummaries, isLoading } = useGetSpellsQuery({ sortBy, sortOrder });
  const handleSortChange = (column: SortableColumns) => {
    const isAsc: boolean = sortBy === column && sortOrder === Order.ASC;
    setSortOrder(isAsc ? Order.DESC : Order.ASC);
    setSortBy(column);
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <div>
      {spellSummaries && (
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <TableSortLabel
                  active={sortBy === Columns.NAME}
                  direction={sortBy === Columns.NAME ? sortOrder : Order.ASC}
                  onClick={() => handleSortChange(Columns.NAME)}
                >
                  {intl.formatMessage({ id: "NAME" })}
                </TableSortLabel>
              </TableCell>
              <TableCell align="center">{intl.formatMessage({ id: "SCHOOL" })}</TableCell>
              <TableCell align="center">
                <TableSortLabel
                  active={sortBy === Columns.LEVEL}
                  direction={sortBy === Columns.LEVEL ? sortOrder : Order.ASC}
                  onClick={() => handleSortChange(Columns.LEVEL)}
                >
                  {intl.formatMessage({ id: "LEVEL" })}
                </TableSortLabel>
              </TableCell>
              <TableCell align="center">
                <TableSortLabel
                  active={sortBy === Columns.CONCENTRATION}
                  direction={sortBy === Columns.CONCENTRATION ? sortOrder : Order.ASC}
                  onClick={() => handleSortChange(Columns.CONCENTRATION)}
                >
                  {intl.formatMessage({ id: "CONCENTRATION" })}
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {spellSummaries.map((spellSummary) => (
              <TableRow
                className="hover:cursor-pointer"
                onClick={() => onSelectSpell(spellSummary.id)}
                key={spellSummary.id}
                hover
                selected={activeSpellId === spellSummary.id}
              >
                <TableCell align="left">{spellSummary.name}</TableCell>
                <TableCell align="center">{spellSummary.magicSchool.name}</TableCell>
                <TableCell align="center">
                  {intl.formatMessage(
                    { id: "SPELL_LEVEL" },
                    { level: spellSummary.level, ritual: spellSummary.ritual.toString() },
                  )}
                </TableCell>
                <TableCell align="center">{spellSummary.concentration && <CheckIcon />}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}

export default SpellsTable;
