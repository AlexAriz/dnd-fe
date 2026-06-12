export enum AvailableStats {
  STR = "STR",
  DEX = "DEX",
  CON = "CON",
  INT = "INT",
  WIS = "WIS",
  CHA = "CHA",
}

export interface StatDetails {
  value: number;
  proficiency: boolean;
  expertise: boolean;
}

export interface StatBonus {
  name: string;
  bonus: number;
  statId: AvailableStats;
}

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

export interface SkillDetails {
  name: AvailableSkills;
  stat: AvailableStats;
  proficiency: boolean;
  expertise: boolean;
}
