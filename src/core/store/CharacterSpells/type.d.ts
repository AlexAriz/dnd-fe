import type { SpellSummary } from "State/Spell/type";

export interface LearnSpellPayload {
  characterId: string;
  spellId: string;
}

export interface CharacterSpell extends SpellSummary {
  prepared: boolean;
}
