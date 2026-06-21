import type { Skills } from "Constants/skills";
import type { AvailableStats } from "State/Stats/type";

export type AvailableSkills = (typeof Skills)[keyof typeof Skills];

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
