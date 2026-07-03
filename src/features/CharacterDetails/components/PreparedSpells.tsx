import { Collapsible, CollapsibleGroup } from "@astryxdesign/core/Collapsible";
import { Grid } from "@astryxdesign/core/Grid";
import { Card } from "@astryxdesign/core/Card";
import useRequiredContext from "Hooks/useRequiredContext";
import ActiveCharacterContext from "../context/ActiveCharacterContext";
import SpellCard from "Components/SpellCard";
import type { CharacterSpell } from "State/CharacterSpells/type";
import { useIntl } from "react-intl";
import { useGetCharacterSpellsQuery } from "State/CharacterSpells";
import { Stack } from "@astryxdesign/core/Stack";

function PreparedSpells() {
  const intl = useIntl();
  const character = useRequiredContext(ActiveCharacterContext);
  const { data: spells = [] } = useGetCharacterSpellsQuery(character.id);

  const spellHash: Record<number, CharacterSpell[]> = spells
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

  return (
    <CollapsibleGroup type="multiple" defaultValue={Object.keys(spellHash)}>
      <Stack>
        {Object.entries(spellHash).map(([level, spells]) => (
          <Card key={level}>
            <Collapsible trigger={intl.formatMessage({ id: "SPELL_DETAIL_LEVEL" }, { level })} value={level}>
              <Grid>
                {spells.map((spell) => (
                  <Card key={spell.id}>
                    <SpellCard spellDetail={spell.markdown} />
                  </Card>
                ))}
              </Grid>
            </Collapsible>
          </Card>
        ))}
      </Stack>
    </CollapsibleGroup>
  );

  // return Object.entries(spellHash).map(([level, spells]) => (
  //   <Accordion key={level} defaultExpanded disableGutters>
  //     <AccordionSummary expandIcon={<ExpandMoreIcon />}>
  //       {intl.formatMessage({ id: "SPELL_DETAIL_LEVEL" }, { level })}
  //     </AccordionSummary>

  //     <AccordionDetails>
  //       <Masonry columns={{ xs: 2, md: 3, lg: 4 }} sequential>
  //         {spells.map((spell) => (
  //           <Paper key={spell.id} className="p-2">
  //             <SpellCard spellDetail={spell.markdown} />
  //           </Paper>
  //         ))}
  //       </Masonry>
  //     </AccordionDetails>
  //   </Accordion>
  // ));
}
export default PreparedSpells;
