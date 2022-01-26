import { combineReducers } from "@reduxjs/toolkit";
import dynamicContentConfigSlice from "src/features/DynamicContent/slices/dynamicContentConfigSlice";
import { IDynamicContentConfig, IDynamicContentNames } from "../features/DynamicContent/interface/dynamicContent";
import dynamicContentNamesSlice from "../features/DynamicContent/slices/dynamicContentNamesSlice";
import { IUser } from "./auth/interface/user";
import userSlice from "./auth/userSlice";
import serverReducer from "./server/serverSlice";

export interface State {
  auth: IUser;
  dynamicContentNames: IDynamicContentNames;
  dynamicContentConfig: IDynamicContentConfig;
}

export const rootReducer = combineReducers({
  server: serverReducer,
  auth: userSlice,
  dynamicContentNames: dynamicContentNamesSlice,
  dynamicContentConfig: dynamicContentConfigSlice,
});
