import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../interfaces";
import { authApi } from "../apis/auth.api";

interface AuthState {
  user?: User;
}

const initialState = {} as AuthState;

export const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
      state.user = payload.entry;
    });

    builder.addMatcher(authApi.endpoints.logout.matchPending, () => {
      return initialState;
    });
  },
});

export const { logoutUser } = slice.actions;

export default slice;
