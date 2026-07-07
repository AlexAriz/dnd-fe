import { createSlice } from "@reduxjs/toolkit";
import type { CreateCharacterPayload, StatBonus } from "State/Character/type";
import type { AvailableSkills } from "State/Skills/type";
import type { AvailableStats } from "State/Stats/type";
import type { RootState } from "Types/state";

const initialState: CreateCharacterPayload = {
  name: "",
  characterClass: {
    classId: "",
    level: 1,
  },
  armorClass: 0,
  speed: {
    walk: 30,
  },
  hitpoints: {
    base: 0,
  },
  stats: {
    STR: {
      value: 8,
      proficiency: false,
      expertise: false,
    },
    DEX: {
      value: 8,
      proficiency: false,
      expertise: false,
    },
    CON: {
      value: 8,
      proficiency: false,
      expertise: false,
    },
    INT: {
      value: 8,
      proficiency: false,
      expertise: false,
    },
    WIS: {
      value: 8,
      proficiency: false,
      expertise: false,
    },
    CHA: {
      value: 8,
      proficiency: false,
      expertise: false,
    },
  },
  statBonuses: [],
  skills: {
    Acrobatics: {
      proficiency: false,
      expertise: false,
    },
    "Animal Handling": {
      proficiency: false,
      expertise: false,
    },
    Arcana: {
      proficiency: false,
      expertise: false,
    },
    Athletics: {
      proficiency: false,
      expertise: false,
    },
    Deception: {
      proficiency: false,
      expertise: false,
    },
    History: {
      proficiency: false,
      expertise: false,
    },
    Insight: {
      proficiency: false,
      expertise: false,
    },
    Intimidation: {
      proficiency: false,
      expertise: false,
    },
    Investigation: {
      proficiency: false,
      expertise: false,
    },
    Medicine: {
      proficiency: false,
      expertise: false,
    },
    Nature: {
      proficiency: false,
      expertise: false,
    },
    Perception: {
      proficiency: false,
      expertise: false,
    },
    Performance: {
      proficiency: false,
      expertise: false,
    },
    Persuasion: {
      proficiency: false,
      expertise: false,
    },
    Religion: {
      proficiency: false,
      expertise: false,
    },
    "Sleight of Hand": {
      proficiency: false,
      expertise: false,
    },
    Stealth: {
      proficiency: false,
      expertise: false,
    },
    Survival: {
      proficiency: false,
      expertise: false,
    },
  },
};

const newCharacterSlice = createSlice({
  name: "newCharacter",
  initialState,
  reducers: (create) => ({
    setName: create.reducer<string>((character, action) => {
      character.name = action.payload;
    }),
    setClassId: create.reducer<string>((character, action) => {
      character.characterClass.classId = action.payload;
    }),
    setSubClassId: create.reducer<string | undefined>((character, action) => {
      character.characterSubClass = action.payload;
    }),
    setLevel: create.reducer<number>((character, action) => {
      character.characterClass.level = action.payload;
    }),
    setArmorClass: create.reducer<number>((character, action) => {
      character.armorClass = action.payload;
    }),
    setHitpoints: create.reducer<number>((character, action) => {
      character.hitpoints.base = action.payload;
    }),
    setSpeed: create.reducer<number>((character, action) => {
      character.speed.walk = action.payload;
    }),
    setStatScore: create.reducer<{ statId: AvailableStats; value: number }>((character, action) => {
      character.stats[action.payload.statId].value = action.payload.value;
    }),
    addStatBonus: create.reducer<StatBonus>((character, action) => {
      character.statBonuses.push(action.payload);
    }),
    removeStatBonus: create.reducer<number>((character, action) => {
      character.statBonuses = character.statBonuses.toSpliced(action.payload, 1);
    }),
    toggleSkill: create.reducer<AvailableSkills>((character, action) => {
      if (character.skills[action.payload].expertise) {
        character.skills[action.payload] = {
          proficiency: false,
          expertise: false,
        };
      } else if (character.skills[action.payload].proficiency) {
        character.skills[action.payload] = {
          proficiency: true,
          expertise: true,
        };
      } else {
        character.skills[action.payload] = {
          proficiency: true,
          expertise: false,
        };
      }
    }),
    setStatProficiencies: create.reducer<AvailableStats[]>((character, action) => {
      Object.entries(character.stats).forEach(([_statId]) => {
        const statId: AvailableStats = _statId as AvailableStats;
        if (action.payload.includes(statId as AvailableStats)) {
          character.stats[statId].proficiency = true;
        } else {
          character.stats[statId].proficiency = false;
        }
      });
    }),
    resetCharacter: () => initialState,
  }),
  selectors: {
    selectCharacter: (character): CreateCharacterPayload => character,
    selectArmorClass: (character) => character.armorClass,
    selectHitpoints: (character) => character.hitpoints.base,
    selectSpeed: (character) => character.speed.walk,
    selectLevel: (character) => character.characterClass.level,
    selectStatScore: (character, statId: AvailableStats) => character.stats[statId].value,
    selectStatProficiencies: (character) =>
      Object.entries(character.stats)
        .filter(([, statValue]) => statValue.proficiency)
        .map(([statId]) => statId as AvailableStats),
    selectStatBonuses: (character): StatBonus[] => character.statBonuses,
    selectSkill: (character, skillName: AvailableSkills) => character.skills[skillName],
    selectCanSubmit: (character): boolean => {
      if (!character.name || !character.characterClass.classId) {
        return false;
      }

      return true;
    },
    selectClass: (character): string => character.characterClass.classId,
    selectSubClass: (character): string | undefined => character.characterSubClass,
  },
});

export default newCharacterSlice.reducer;
export const newCharacterActions = newCharacterSlice.actions;
export const newCharacterSelectors = newCharacterSlice.getSelectors<RootState>((state) => state.newCharacter);
