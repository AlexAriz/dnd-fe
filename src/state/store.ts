import { configureStore } from "@reduxjs/toolkit";
import currentUser from "State/currentUser";

const store = configureStore({
  reducer: {
    currentUser,
  },
});

export default store;
