import { useIntl } from "react-intl";
import Typography from "@mui/material/Typography";
import { useGetSpellsQuery } from "State/Spell";
import CircularProgress from "@mui/material/CircularProgress";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import CheckIcon from "@mui/icons-material/Check";
import { Link } from "react-router";
import SPELL_PATHS from "../constants/paths";
import TableSortLabel from "@mui/material/TableSortLabel";
import { useState } from "react";
import type { SortableColumns, SortOrder } from "../types/type";
import { Columns, Order } from "../constants/sorting";

function SpellList() {
  const intl = useIntl();
  const [sortBy, setSortBy] = useState<SortableColumns>(Columns.NAME);
  const [sortOrder, setSortOrder] = useState<SortOrder>(Order.ASC);
  const { data: spellSummaries, isLoading } = useGetSpellsQuery({ sortBy, sortOrder });
  const handleSortChange = (column: SortableColumns) => {
    const isAsc: boolean = sortBy === column && sortOrder === Order.ASC;
    setSortOrder(isAsc ? Order.DESC : Order.ASC);
    setSortBy(column);
  };

  return (
    <>
      <Typography variant="h4">{intl.formatMessage({ id: "MODULE_SPELLS" })}</Typography>

      {isLoading && <CircularProgress />}

      {spellSummaries && (
        <Table size="small" component="div">
          <TableHead component="div">
            <TableRow component="div">
              <TableCell component="div" align="center">
                <TableSortLabel
                  active={sortBy === Columns.NAME}
                  direction={sortBy === Columns.NAME ? sortOrder : Order.ASC}
                  onClick={() => handleSortChange(Columns.NAME)}
                >
                  {intl.formatMessage({ id: "NAME" })}
                </TableSortLabel>
              </TableCell>
              <TableCell component="div" align="center">
                {intl.formatMessage({ id: "SCHOOL" })}
              </TableCell>
              <TableCell component="div" align="center">
                <TableSortLabel
                  active={sortBy === Columns.LEVEL}
                  direction={sortBy === Columns.LEVEL ? sortOrder : Order.ASC}
                  onClick={() => handleSortChange(Columns.LEVEL)}
                >
                  {intl.formatMessage({ id: "LEVEL" })}
                </TableSortLabel>
              </TableCell>
              <TableCell component="div" align="center">
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

          <TableBody component="div">
            {spellSummaries.map((spellSummary) => (
              <TableRow
                component={Link}
                to={SPELL_PATHS.DETAILS.replace(":spellId", spellSummary.id)}
                key={spellSummary.id}
                hover
              >
                <TableCell component="div" align="left">
                  {spellSummary.name}
                </TableCell>
                <TableCell component="div" align="center">
                  {spellSummary.magicSchool.name}
                </TableCell>
                <TableCell component="div" align="center">
                  {intl.formatMessage(
                    { id: "SPELL_LEVEL" },
                    { level: spellSummary.level, ritual: spellSummary.ritual.toString() },
                  )}
                </TableCell>
                <TableCell component="div" align="center">
                  {spellSummary.concentration && <CheckIcon />}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  );
}

export default SpellList;
