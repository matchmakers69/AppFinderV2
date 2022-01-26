import { get } from "src/config/axios";
import {
  IAccountType,
  IReviewTools,
  IDynamicContentName,
  IDynamicContentConfig,
  IDynamicConfigOptions,
} from "src/interfaces/dynamicContent";

export const getDynamicContentNamesByMicrositeId = async (micrositeId: number) => {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}api/services/app/DynamicContentConfig/GetAllDynamicConfigNamesForMicrosite?micrositeId=${micrositeId}`;
  const response = await get<IDynamicContentName>(URL);
  return response.data;
};

export const fetchUserRolesByAccountType = async (): Promise<IAccountType> => {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}api/services/app/Account/GetAllAccountTypes`;
  const response = await get(URL);
  return response.data;
};

export const fetchReviewsTool = async (): Promise<IReviewTools> => {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}api/services/app/ReviewTool/GetReviewToolsAsNameValues`;
  const response = await get(URL);
  return response.data;
};

export const fetchConfigOptions = async (): Promise<IDynamicConfigOptions> => {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}api/services/app/DynamicContentConfig/GetAllDynamicConfigNamesForAppFinder`;
  const response = await get(URL);
  return response.data;
};

export const getDynamicContentConfigById = async (id: number): Promise<IDynamicContentConfig> => {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}api/services/app/DynamicContentConfig/GetDynamicContentConfig?dynamicContentConfigId=${id}`;
  const response = await get(URL);
  return response.data;
};
