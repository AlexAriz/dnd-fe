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
  hitPoints: {
    base: number;
    bonus: number | null;
    temporary: number | null;
    removed: number | null;
  };
  speeds: {
    walk: number;
    fly: number | null;
    swim: number | null;
    burrow: number | null;
    climb: number | null;
  };
  skills: Record<
    string,
    {
      name: string;
      stat: string;
      proficiency: boolean;
      expertise: boolean;
    }
  >;
  stats: Record<
    string,
    {
      value: number;
      proficiency: boolean;
      expertise: boolean;
    }
  >;
  statBonuses: {
    name: string;
    statId: string;
    bonus: number;
  }[];
}

interface Stat {
  value: number;
  proficiency: boolean;
  expertise: boolean;
}
interface StatBonus {
  name: string;
  bonus: 3;
  statId: string;
}
interface Skill {
  proficiency: boolean;
  expertise: boolean;
}
export interface CreateCharacterPayload {
  name: string;
  characterClass: {
    classId: string;
    level: number;
  };
  armorClass: number;
  stats: {
    STR: Stat;
    DEX: Stat;
    CON: Stat;
    INT: Stat;
    WIS: Stat;
    CHA: Stat;
  };
  statBonuses: StatBonus[];
  skills: {
    Acrobatics: Skill;
    "Animal Handling": Skill;
    Arcana: Skill;
    Athletics: Skill;
    Deception: Skill;
    History: Skill;
    Insight: Skill;
    Intimidation: Skill;
    Investigation: Skill;
    Medicine: Skill;
    Nature: Skill;
    Perception: Skill;
    Performance: Skill;
    Persuasion: Skill;
    Religion: Skill;
    "Sleight of Hand": Skill;
    Stealth: Skill;
    Survival: Skill;
  };
  speed: {
    walk: number;
  };
  hitpoints: {
    base: number;
  };
}
