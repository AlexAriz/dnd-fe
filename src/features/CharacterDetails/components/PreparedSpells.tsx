import Masonry from "@mui/lab/Masonry";
import useRequiredContext from "Hooks/useRequiredContext";
import ActiveCharacterContext from "../context/ActiveCharacterContext";
import Paper from "@mui/material/Paper";
import SpellDetails from "Features/SpellList/components/SpellDetails";
import type { CharacterSpell } from "State/Character/type";
import { useIntl } from "react-intl";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

function PreparedSpells() {
  const intl = useIntl();
  const character = useRequiredContext(ActiveCharacterContext);
  const spellHash: Record<number, CharacterSpell[]> = character.spells
    .filter((spell) => spell.prepared)
    .reduce(
      (hash, spell) => {
        if (hash[spell.level]) {
          return {
            ...hash,
            [spell.level]: hash[spell.level].concat(spell),
          };
        } else {
          return {
            ...hash,
            [spell.level]: [spell],
          };
        }
      },
      {} as Record<number, CharacterSpell[]>,
    );

  return Object.entries(spellHash).map(([level, spells]) => (
    <Accordion key={level} defaultExpanded disableGutters>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        {intl.formatMessage({ id: "SPELL_DETAIL_LEVEL" }, { level })}
      </AccordionSummary>

      <AccordionDetails>
        <Masonry columns={{ xs: 2, md: 3, lg: 4 }} sequential>
          {spells.map((spell) => (
            <Paper key={spell.id} className="p-2">
              <SpellDetails spellId={spell.id} />
            </Paper>
          ))}
        </Masonry>
      </AccordionDetails>
    </Accordion>
  ));
}
export default PreparedSpells;
