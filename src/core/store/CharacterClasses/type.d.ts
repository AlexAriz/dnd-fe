import type { ClassSummary } from "State/Classes/type";
import type { SubClassSummary } from "State/SubClasses/type";

export interface CharacterClass extends Pick<ClassSummary, "id" | "name"> {
  level: number;
  isStartingClass: boolean;
  subClass: SubClassSummary | null;
}
