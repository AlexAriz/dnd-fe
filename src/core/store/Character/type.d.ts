import type { AvailableSkills, SkillDetails } from "State/Skills/type";
import type { AvailableStats, StatDetails } from "State/Stats/type";

export interface CharacterSummary {
  id: string;
  name: string;
  classes: {
    id: string;
    name: string;
    level: number;
    isStartingClass: boolean;
  }[];
}

export interface StatBonus {
  name: string;
  bonus: number;
  statId: AvailableStats;
}

export interface CharacterDetail {
  id: string;
  name: string;
  armorClass: number;
  classes: {
    id: string;
    name: string;
    level: number;
    isStartingClass: boolean;
  }[];
  inspiration: boolean;
  stats: Record<AvailableStats, StatDetails>;
  statBonuses: StatBonus[];
  skills: Record<AvailableSkills, SkillDetails>;
  speeds: {
    walk: number;
    fly: number | null;
    swim: number | null;
    burrow: number | null;
    climb: number | null;
  };
  hitPoints: {
    base: number;
    bonus: number | null;
    temporary: number | null;
    removed: number | null;
  };
}

export interface CreateCharacterPayload {
  name: string;
  characterClass: {
    classId: string;
    level: number;
  };
  armorClass: number;
  stats: Record<AvailableStats, StatDetails>;
  statBonuses: StatBonus[];
  skills: Record<AvailableSkills, Omit<SkillDetails, "name" | "stat">>;
  speed: {
    walk: number;
  };
  hitpoints: {
    base: number;
  };
}
