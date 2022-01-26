import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDynamicContentConfigById } from "src/services/APIs/dynamicContent/dynamicContent.api";

export const fetchDynamicContentConfig = createAsyncThunk(
  "dynamicContent/fetchDynamicContentConfig",
  async (id: number, { rejectWithValue }) => {
    try {
      const data = await getDynamicContentConfigById(id);
      return data.result;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err?.response?.data);
    }
  }
);
