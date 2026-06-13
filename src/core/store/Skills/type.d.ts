import type { AvailableStats } from "State/Stats/type";

export enum AvailableSkills {
  "Acrobatics" = "Acrobatics",
  "Animal Handling" = "Animal Handling",
  "Arcana" = "Arcana",
  "Athletics" = "Athletics",
  "Deception" = "Deception",
  "History" = "History",
  "Insight" = "Insight",
  "Intimidation" = "Intimidation",
  "Investigation" = "Investigation",
  "Medicine" = "Medicine",
  "Nature" = "Nature",
  "Perception" = "Perception",
  "Performance" = "Performance",
  "Persuasion" = "Persuasion",
  "Religion" = "Religion",
  "Sleight of Hand" = "Sleight of Hand",
  "Stealth" = "Stealth",
  "Survival" = "Survival",
}

export interface SkillSummary {
  name: AvailableSkills;
  statId: AvailableStats;
}

export interface SkillDetails {
  name: AvailableSkills;
  stat: AvailableStats;
  proficiency: boolean;
  expertise: boolean;
}
