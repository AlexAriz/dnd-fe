import { MagicSchools } from "Constants/magic";

export type MagicSchool = (typeof MagicSchools)[keyof typeof MagicSchools];

export interface SpellSummaryResponse {
  id: string;
  name: string;
  source: string;
  page: number;
  level: number;
  school: string;
  concentration: boolean;
  ritual: boolean;
  markdown: string;
  magicSchool: {
    name: MagicSchool;
  };
}

export interface SpellSummary
  extends
    Record<string, unkonwn>,
    Pick<
      SpellSummaryResponse,
      "id" | "name" | "source" | "page" | "level" | "school" | "concentration" | "ritual" | "markdown"
    > {
  magicSchool: MagicSchool;
}

export interface SpellDetail {
  id: string;
  name: string;
  source: string;
  page: number;
  level: number;
  school: string;
  concentration: boolean;
  ritual: boolean;
  markdown: string;
  magicSchool: {
    name: MagicSchool;
  };
  classes: {
    id: string;
    name: string;
  }[];
  subClasses: {
    id: string;
    name: string;
    shortName: string;
    class: {
      id: string;
      name: string;
    };
  }[];
}
