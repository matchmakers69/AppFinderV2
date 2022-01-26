/* eslint-disable @typescript-eslint/no-empty-function */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "./interface/user";

interface rejectMessage {
  errorMessage: string;
}

export const logInAction = createAsyncThunk<IUser, any, { rejectValue: rejectMessage }>("user/logIn", async (data) => {
  return data;
});

export const logOutAction = createAsyncThunk("user/logOut", async (data, thunkAPI) => {});
