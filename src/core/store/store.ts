import { configureStore } from "@reduxjs/toolkit";
import currentUser from "Features/Auth/store/currentUser";
import language from "Features/Language/store/language";

const store = configureStore({
  reducer: {
    currentUser,
    language,
  },
});

export default store;
