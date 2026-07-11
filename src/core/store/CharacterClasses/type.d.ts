import type { ClassSummary } from "State/Classes/type";

export interface CharacterClass extends Pick<ClassSummary, "id" | "name"> {
  level: number;
  isStartingClass: boolean;
  subClass?: string | null;
}
