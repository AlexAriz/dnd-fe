import type { AvailableSkills, SkillDetails } from "State/Skills/type";
import type { AvailableStats, StatDetails } from "State/Stats/type";
import type { SubClassSummary } from "State/SubClasses/type";

interface CharacterClass {
  id: string;
  name: string;
  level: number;
  isStartingClass: boolean;
  subClass?: SubClassSummary;
}

export interface CharacterSummary {
  id: string;
  name: string;
  classes: CharacterClass[];
}

export interface StatBonus {
  name: string;
  bonus: number;
  statId: AvailableStats;
}

export interface CharacterDetailResponse {
  id: string;
  name: string;
  armorClass: number;
  proficiencyBonus: number;
  initiative: number;
  inspiration: boolean;
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

export interface CharacterDetail extends Omit<CharacterDetailResponse, "hitPoints"> {
  hitPoints: {
    current: number;
    max: number;
  };
}

export interface CreateCharacterPayload {
  name: string;
  characterClass: {
    classId: string;
    level: number;
  };
  characterSubClass?: string;
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

export interface PatchCharacterPayload {
  characterId: string;
  inspiration?: boolean;
  hitpoints?: number;
}
