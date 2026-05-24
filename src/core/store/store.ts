import { configureStore } from "@reduxjs/toolkit";

import auth from "Features/Auth/store/auth";
import language from "Features/Language/store/language";

const store = configureStore({
  reducer: {
    auth,
    language,
  },
});

export default store;
