import { configureStore } from "@reduxjs/toolkit";

import auth from "State/Auth";
import characterApi from "State/Character";
import language from "State/Language";
import newCharacter from "Features/CreateCharacter/store";
import profileApi from "State/Profile";
import spellApi from "State/Spell";
import classApi from "./Classes";
import skillApi from "./Skills";
import statApi from "./Stats";

const store = configureStore({
  reducer: {
    auth,
    characterApi: characterApi.reducer,
    classApi: classApi.reducer,
    language,
    newCharacter,
    profileApi: profileApi.reducer,
    skillApi: skillApi.reducer,
    spellApi: spellApi.reducer,
    statApi: statApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(characterApi.middleware)
      .concat(classApi.middleware)
      .concat(profileApi.middleware)
      .concat(skillApi.middleware)
      .concat(spellApi.middleware)
      .concat(statApi.middleware),
});

export default store;
