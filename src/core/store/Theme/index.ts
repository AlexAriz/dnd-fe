import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "Types/state";

interface ThemeState {
  theme: "light" | "dark";
}

const initialState: ThemeState = {
  theme: "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: (create) => ({
    toggleTheme: create.reducer<void>((themeState) => {
      if (themeState.theme === "light") {
        themeState.theme = "dark";
      } else {
        themeState.theme = "light";
      }
    }),
  }),
  selectors: {
    selectTheme: (themeState) => themeState.theme,
  },
});

export default themeSlice.reducer;
export const themeActions = themeSlice.actions;
export const themeSelectors = themeSlice.getSelectors<RootState>((state) => state.theme);
