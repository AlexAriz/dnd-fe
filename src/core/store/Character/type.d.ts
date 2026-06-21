import type { AvailableSkills, SkillDetails } from "State/Skills/type";
import type { AvailableStats, StatDetails } from "State/Stats/type";

interface CharacterClass {
  id: string;
  name: string;
  level: number;
  isStartingClass: boolean;
  subClass?: {
    id: string;
    name: string;
    shortName: string;
  };
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
  classes: CharacterClass[];
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

export interface CharacterDetail extends Pick<
  CharacterDetailResponse,
  "id" | "name" | "classes" | "speeds" | "armorClass" | "inspiration" | "stats" | "skills"
> {
  hitPoints: {
    current: number;
    max: number;
  };
  proficiencyBonus: number;
  initiative: number;
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
