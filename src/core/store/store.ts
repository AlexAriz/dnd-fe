import { configureStore } from "@reduxjs/toolkit";
import language from "Features/Language/store/language";

const store = configureStore({
  reducer: {
    language,
  },
});

export default store;
