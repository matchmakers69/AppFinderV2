import { createAsyncThunk } from "@reduxjs/toolkit";
import { IDynamicContentName } from "src/interfaces/dynamicContent";
import { getDynamicContentNamesByMicrositeId } from "src/services/APIs/dynamicContent/dynamicContent.api";

export const fetchDynamicContentNames = createAsyncThunk(
  "dynamicContent/fetchOptions",
  async (microSiteId: number, { rejectWithValue }) => {
    try {
      const data = await getDynamicContentNamesByMicrositeId(microSiteId);
      return data.result as unknown as IDynamicContentName[];
    } catch (err) {
      return rejectWithValue(err?.response?.data);
    }
  }
);
