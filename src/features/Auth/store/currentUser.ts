import { createEntityAdapter, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { AuthError, type User as SupaUser } from "@supabase/supabase-js";
import Routes from "Constants/routes";
import Logger from "../../../core/providers/Logger";
import router from "../../../router";
import { appAsyncThunk } from "Hooks/state";
import Auth from "../api/Auth";

type CurrentUser = Pick<SupaUser, "id" | "email">;
interface AuthParams {
  email: string;
  password: string;
}

const currentUserAdapter = createEntityAdapter<CurrentUser>();

export const verifySession = appAsyncThunk("currentUser/verifySession", async (_, { rejectWithValue }) => {
  const response = await Auth.getClient().auth.getSession();
  if (response?.error) {
    return rejectWithValue(response.error);
  } else if (!response?.data.session) {
    return rejectWithValue(null);
  } else {
    return response.data.session?.user;
  }
});

export const logout = appAsyncThunk("currentUser/logout", async (_, { rejectWithValue }) => {
  const response = await Auth.getClient().auth.signOut();
  if (response?.error) {
    return rejectWithValue(response.error);
  } else {
    return;
  }
});

export const login = appAsyncThunk<SupaUser, AuthParams>(
  "currentUser/login",
  async ({ email, password }, { rejectWithValue }) => {
    const response = await Auth.getClient().auth.signInWithPassword({ email, password });
    if (!response?.data.user) {
      return rejectWithValue(response.error);
    } else {
      return response.data.user;
    }
  },
);

export const signup = appAsyncThunk<void, AuthParams>(
  "currentUser/signup",
  async ({ email, password }, { rejectWithValue }) => {
    const response = await Auth.getClient().auth.signUp({ email, password });
    if (!response?.data.user) {
      return rejectWithValue(response.error);
    } else {
      return;
    }
  },
);

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: currentUserAdapter.getInitialState(),
  reducers: {
    setUser: (state, { payload: supaUser }: PayloadAction<SupaUser>) =>
      currentUserAdapter.addOne(state, { id: supaUser.id, email: supaUser.email }),
    clear: currentUserAdapter.removeAll,
  },
  extraReducers: (builder) => {
    builder
      .addCase(verifySession.rejected, (_, action) => {
        const error = action.payload;
        if (error) {
          Logger.error("Error getting user", { ...error });
        } else {
          Logger.warn("Session expired");
        }

        router.navigate(Routes.LOGIN);
      })
      .addCase(verifySession.fulfilled, (state, action) => {
        const supaUser = action.payload;
        currentUserAdapter.addOne(state, { id: supaUser.id, email: supaUser.email });
      })
      .addCase(logout.rejected, (_, action) => {
        const error = action.payload as AuthError;
        Logger.error("Error logging out", { ...error });
      })
      .addCase(logout.fulfilled, (state) => {
        currentUserAdapter.removeAll(state);
        router.navigate(Routes.LOGIN);
      })
      .addCase(login.rejected, (_, action) => {
        const error = action.payload as AuthError;
        Logger.error("Error signing in", { ...error });
      })
      .addCase(login.fulfilled, (state, action) => {
        const supaUser = action.payload;
        currentUserAdapter.addOne(state, { id: supaUser.id, email: supaUser.email });
        router.navigate(Routes.HOME);
      })
      .addCase(signup.rejected, (_, action) => {
        const error = action.payload as AuthError;
        Logger.error("Error signing up", { ...error });
      })
      .addCase(signup.fulfilled, () => {
        router.navigate(Routes.LOGIN);
      });
  },
});

export default currentUserSlice.reducer;

export const currentUserActions = currentUserSlice.actions;
