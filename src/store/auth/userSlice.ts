/* eslint-disable @typescript-eslint/no-empty-function */
import { createSlice } from "@reduxjs/toolkit";
import { logInAction, logOutAction } from "./actions";
import { IUser } from "./interface/user";

const initialState: IUser = {
  isLoggedIn: false,
  user: null,
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(logInAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(logInAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(logInAction.rejected, (state) => {
        state.loading = false;
      })
      .addCase(logOutAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(logOutAction.fulfilled, (state) => {
        state.user = null;
        state.isLoggedIn = false;
      })
      .addCase(logOutAction.rejected, (state) => {
        state.loading = false;
      })
      .addDefaultCase(() => {}),
});

export default userSlice.reducer;
