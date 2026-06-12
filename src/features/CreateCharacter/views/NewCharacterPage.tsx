import Typography from "@mui/material/Typography";
import { useIntl } from "react-intl";
import AbilityScores from "../components/AbilityScores";
import CharacterBase from "../components/CharacterBase";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";

function NewCharacterPage() {
  const intl = useIntl();

  return (
    <>
      <Typography variant="h1">{intl.formatMessage({ id: "NEW_CHARACTER" })}</Typography>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {intl.formatMessage({ id: "NEW_CHARACTER_BASE" })}
        </AccordionSummary>

        <AccordionDetails>
          <CharacterBase />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {intl.formatMessage({ id: "NEW_CHARACTER_ABILITY_SCORE" })}
        </AccordionSummary>

        <AccordionDetails>
          <AbilityScores />
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default NewCharacterPage;
