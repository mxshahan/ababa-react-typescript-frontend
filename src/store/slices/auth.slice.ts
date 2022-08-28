import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../interfaces";
import { authApi } from "../apis/auth.api";

interface AuthState {
  user?: User;
}

const slice = createSlice({
  name: "auth",
  initialState: {} as AuthState,
  reducers: {
    logoutUser: (state) => {
      state.user = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
      state.user = payload.entry;
    });
  },
});

export const { logoutUser } = slice.actions;

export default slice;
