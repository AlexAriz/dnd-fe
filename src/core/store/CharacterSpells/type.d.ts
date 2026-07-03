import type { SpellSummary, SpellSummaryResponse } from "State/Spell/type";

export interface CharacterSpellApiResponse {
  spellId: string;
  prepared: boolean;
  spell: SpellSummaryResponse;
}

export interface CharacterSpell extends SpellSummary {
  prepared: boolean;
}
