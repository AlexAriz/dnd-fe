import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../types/state";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export const useAppSelector = useSelector.withTypes<RootState>();

export const appAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState;
  dispatch: AppDispatch;
}>();
