import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchConfigOptions } from "src/services/APIs/dynamicContent/dynamicContent.api";

export const fetchDynamicContentConfigOptions = createAsyncThunk(
  "dynamicContent/fetchConfigOptions",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchConfigOptions();
      return data.result;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err?.response?.data);
    }
  }
);
