import { createSlice } from "@reduxjs/toolkit";
import { IDynamicContentConfig } from "../interface/dynamicContent";
import { fetchAccountTypeByUsersRole } from "../thunks/fetchAccountTypeThunk";
import { fetchDynamicContentConfigOptions } from "../thunks/fetchConfigOptionsThunk";
import { fetchDynamicContentConfig } from "../thunks/fetchDynamicContentConfigByIdThunk";
import { fetchDynamicContentReviewTools } from "../thunks/fetchReviewToolsThunk";

const initialState: IDynamicContentConfig = {
  config: null,
  accountTypes: null,
  reviewTools: null,
  configOptions: null,
  loading: false,
  errorMessage: "",
};

const fetchDynamicContentData = (builder, actionName, propertyName) => {
  builder
    .addCase(actionName.pending, (state) => {
      state.loading = true;
    })
    .addCase(actionName.fulfilled, (state, action) => {
      state[propertyName] = action.payload;
      state.loading = false;
    })
    .addCase(actionName.rejected, (state, action) => {
      state.loading = false;
      state.errorMessage = action.error.message || "";
    });
};

const dynamicContentConfigSlice = createSlice({
  name: "dynamicContentConfig",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    fetchDynamicContentData(builder, fetchDynamicContentConfig, "config");
    fetchDynamicContentData(builder, fetchAccountTypeByUsersRole, "accountTypes");
    fetchDynamicContentData(builder, fetchDynamicContentReviewTools, "reviewTools");
    fetchDynamicContentData(builder, fetchDynamicContentConfigOptions, "configOptions");
  },
});

export default dynamicContentConfigSlice.reducer;
