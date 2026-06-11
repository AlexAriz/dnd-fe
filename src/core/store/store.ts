import { configureStore } from "@reduxjs/toolkit";

import auth from "State/Auth";
import characterApi from "State/Character";
import language from "State/Language";
import profileApi from "State/Profile";
import spellApi from "State/Spell";

const store = configureStore({
  reducer: {
    auth,
    characterApi: characterApi.reducer,
    language,
    profileApi: profileApi.reducer,
    spellApi: spellApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(profileApi.middleware).concat(spellApi.middleware).concat(characterApi.middleware),
});

export default store;
