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
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
      state.user = payload.entry;
    });
    builder.addMatcher(authApi.endpoints.register.matchFulfilled, (state, { payload }) => {
      state.user = payload.entry;
    });

    builder.addMatcher(authApi.endpoints.logout.matchPending, () => {
      return initialState;
    });
  },
});

export default slice;
