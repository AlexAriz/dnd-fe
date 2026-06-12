import { createSlice } from "@reduxjs/toolkit";
import type { CreateCharacterPayload } from "State/Character/type";

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
  }),
});

export default newCharacterSlice.reducer;
export const newCharacterActions = newCharacterSlice.actions;
