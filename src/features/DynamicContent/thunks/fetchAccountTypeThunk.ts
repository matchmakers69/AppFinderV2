import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUserRolesByAccountType } from "src/services/APIs/dynamicContent/dynamicContent.api";

export const fetchAccountTypeByUsersRole = createAsyncThunk(
  "dynamicContent/fetchAccountType",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchUserRolesByAccountType();
      return data.result;
    } catch (err) {
      console.warn(err);
      return rejectWithValue(err?.response?.data);
    }
  }
);
