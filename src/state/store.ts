import { configureStore } from "@reduxjs/toolkit";
import currentUser from "./currentUser";

const store = configureStore({
  reducer: {
    currentUser,
  },
});

export default store;
