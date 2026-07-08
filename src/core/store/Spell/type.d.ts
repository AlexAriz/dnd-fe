import { MagicSchools } from "Constants/magic";

export type MagicSchool = (typeof MagicSchools)[keyof typeof MagicSchools];

export interface SpellSummary extends Record<string, unkonwn> {
  id: string;
  name: string;
  level: number;
  concentration: boolean;
  ritual: boolean;
  markdown: string;
  magicSchool: MagicSchool;
}
