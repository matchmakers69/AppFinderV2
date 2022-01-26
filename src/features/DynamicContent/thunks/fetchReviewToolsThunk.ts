import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchReviewsTool } from "src/services/APIs/dynamicContent/dynamicContent.api";

export const fetchDynamicContentReviewTools = createAsyncThunk(
  "dynamicContent/fetchReviewTools",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchReviewsTool();
      return data.result;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err?.response?.data);
    }
  }
);
