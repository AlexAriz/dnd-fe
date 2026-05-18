import { createEntityAdapter, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type User as SupaUser } from "@supabase/supabase-js";

type CurrentUser = Pick<SupaUser, "id" | "email">;

const currentUserAdapter = createEntityAdapter<CurrentUser>();

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: currentUserAdapter.getInitialState(),
  reducers: {
    setUser: (state, { payload: supaUser }: PayloadAction<SupaUser>) =>
      currentUserAdapter.addOne(state, { id: supaUser.id, email: supaUser.email }),
    clear: currentUserAdapter.removeAll,
  },
});

export default currentUserSlice.reducer;

export const currentUserActions = currentUserSlice.actions;
