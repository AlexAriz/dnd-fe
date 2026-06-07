import { useIntl } from "react-intl";
import Typography from "@mui/material/Typography";
import { useGetSpellsQuery } from "../store/spell";
import CircularProgress from "@mui/material/CircularProgress";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import CheckIcon from "@mui/icons-material/Check";
import { Link } from "react-router";
import SPELL_PATHS from "../constants/paths";

function SpellList() {
  const intl = useIntl();
  const { data: spellSummaries, isLoading } = useGetSpellsQuery();

  return (
    <>
      <Typography variant="h1">{intl.formatMessage({ id: "MODULE_SPELLS" })}</Typography>

      {isLoading && <CircularProgress />}

      {spellSummaries && (
        <Table size="small" component="div">
          <TableHead component="div">
            <TableRow component="div">
              <TableCell component="div" align="center">
                {intl.formatMessage({ id: "NAME" })}
              </TableCell>
              <TableCell component="div" align="center">
                {intl.formatMessage({ id: "SCHOOL" })}
              </TableCell>
              <TableCell component="div" align="center">
                {intl.formatMessage({ id: "LEVEL" })}
              </TableCell>
              <TableCell component="div" align="center">
                {intl.formatMessage({ id: "CONCENTRATION" })}
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody component="div">
            {spellSummaries.map((spellSummary) => (
              <TableRow
                component={Link}
                to={SPELL_PATHS.DETAILS.replace(":spellId", spellSummary.id) ?? ""}
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
