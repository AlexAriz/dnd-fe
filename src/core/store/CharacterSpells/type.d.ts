import type { SpellSummary } from "State/Spell/type";

export interface CharacterSpell extends SpellSummary {
  prepared: boolean;
}
