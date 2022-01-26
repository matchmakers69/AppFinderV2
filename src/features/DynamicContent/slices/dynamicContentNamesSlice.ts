/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ActionReducerMapBuilder, AsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IDynamicContentNames } from "../interface/dynamicContent";
import { fetchDynamicContentNames } from "../thunks/fetchDynamicContentNamesThunk";

const initialState: IDynamicContentNames = {
  dynamicContentNames: null,
  loading: false,
};

const fetchDynamicContentNameOptions = (
  builder: ActionReducerMapBuilder<IDynamicContentNames>,
  actionName: AsyncThunk<unknown, number, object>,
  propertyName: keyof IDynamicContentNames
) => {
  builder
    .addCase(actionName.pending, (state) => {
      state.loading = true;
    })

    .addCase(actionName.fulfilled, (state, action) => {
      // @ts-ignore
      state[propertyName] = action.payload;
      state.loading = false;
    })
    .addCase(actionName.rejected, (state) => {
      state.loading = false;
    });
};

const dynamicContentNamesSlice = createSlice({
  name: "dynamicContentNames",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    fetchDynamicContentNameOptions(builder, fetchDynamicContentNames, "dynamicContentNames");
  },
});

export default dynamicContentNamesSlice.reducer;
