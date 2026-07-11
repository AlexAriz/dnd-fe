import { configureStore } from "@reduxjs/toolkit";

import auth from "State/Auth";
import theme from "State/Theme";
import characterApi from "State/Character";
import characterClassesApi from "State/CharacterClasses";
import characterSpellsApi from "State/CharacterSpells";
import newCharacter from "Features/CreateCharacter/store";
import profileApi from "State/Profile";
import spellApi from "State/Spell";
import classApi from "State/Classes";
import subClassApi from "State/SubClasses";
import skillApi from "State/Skills";
import statApi from "State/Stats";

const store = configureStore({
  reducer: {
    auth,
    characterApi: characterApi.reducer,
    characterClassesApi: characterClassesApi.reducer,
    characterSpellsApi: characterSpellsApi.reducer,
    classApi: classApi.reducer,
    subClassApi: subClassApi.reducer,
    newCharacter,
    profileApi: profileApi.reducer,
    skillApi: skillApi.reducer,
    spellApi: spellApi.reducer,
    statApi: statApi.reducer,
    theme,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(characterApi.middleware)
      .concat(characterClassesApi.middleware)
      .concat(characterSpellsApi.middleware)
      .concat(classApi.middleware)
      .concat(subClassApi.middleware)
      .concat(profileApi.middleware)
      .concat(skillApi.middleware)
      .concat(spellApi.middleware)
      .concat(statApi.middleware),
});

export default store;
