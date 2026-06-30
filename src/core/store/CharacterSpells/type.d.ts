import type { SpellSummary } from "State/Spell/type";

export interface CharacterSpellApiResponse {
  spellId: string;
  prepared: boolean;
  spell: SpellSummary;
}

export interface CharacterSpell extends SpellSummary {
  prepared: boolean;
}
