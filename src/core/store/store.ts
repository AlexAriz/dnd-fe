import { configureStore } from "@reduxjs/toolkit";

import auth from "Features/Auth/store/auth";
import { characterApi } from "Features/Characters/store/character";
import language from "Features/Language/store/language";
import { profileApi } from "Features/Profile/store/profile";
import { spellApi } from "Features/Spells/store/spell";

const store = configureStore({
  reducer: {
    auth,
    language,
    profileApi: profileApi.reducer,
    spellApi: spellApi.reducer,
    characterApi: characterApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(profileApi.middleware).concat(spellApi.middleware).concat(characterApi.middleware),
});

export default store;
