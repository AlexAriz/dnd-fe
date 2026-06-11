import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ResolvedIntlConfig } from "react-intl";

import type { RootState } from "Types/state";
import type { Languages } from "State/Language/type";
import en from "Features/Language/locales/en.json";
import es from "Features/Language/locales/es.json";

interface LanguageState {
  language: Languages;
  messages: Record<string, ResolvedIntlConfig["messages"]>;
}

const initialState: LanguageState = {
  language: "en",
  messages: {
    en,
    es,
  },
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage(state, action: PayloadAction<Languages>) {
      state.language = action.payload;
    },
  },
  selectors: {
    selectLanguage: (state): Languages => state.language,
    selectMessages: (state): ResolvedIntlConfig["messages"] => state.messages[state.language],
  },
});

export default languageSlice.reducer;
export const languageActions = languageSlice.actions;
export const languageSelectors = languageSlice.getSelectors<RootState>((state) => state.language);
