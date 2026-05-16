import { configureStore } from "@reduxjs/toolkit";
import currentUser from "State/currentUser";
import language from "State/language";

const store = configureStore({
  reducer: {
    currentUser,
    language,
  },
});

export default store;
