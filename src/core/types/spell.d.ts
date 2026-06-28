import type { SpellSummary } from "State/Spell/type";

export type BaseSpell = Pick<
  SpellSummary,
  "id" | "name" | "magicSchool" | "level" | "ritual" | "markdown" | "concentration"
>;
