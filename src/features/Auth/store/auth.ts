import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "Types/state";

interface AuthState {
  accessToken?: string;
}

const initialState: AuthState = {};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload;
    },
    clearToken(state) {
      state.accessToken = undefined;
    },
  },
  selectors: {
    selectToken: (state) => state.accessToken,
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;
export const authSelectors = authSlice.getSelectors<RootState>((state) => state.auth);
