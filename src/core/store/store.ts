import { configureStore } from "@reduxjs/toolkit";

import auth from "Features/Auth/store/auth";
import language from "Features/Language/store/language";
import { profileApi } from "Features/Profile/store/profile";

const store = configureStore({
  reducer: {
    auth,
    language,
    profileApi: profileApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(profileApi.middleware),
});

export default store;
