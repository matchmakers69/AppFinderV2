export interface IDynamicContentName {
  id: number;
  dynamicContentConfigName: string;
}

export interface IDynamicContentNames {
  dynamicContentNames: IDynamicContentName[] | null;
  loading: boolean;
}

// TODO double check if needed
export interface IDynamicContentNamesResult {
  result: IDynamicContentName[];
}

export interface IDynamicContentResult {
  id: number;
  dynamicContentConfigName: string;
  accountTypeId: null;
  reviewToolId: number;
}
export interface IDynamicContentAccount {
  id: number;
  accountTypeName: string;
}

export interface IDynamicContentReviewTools {
  name: string;
  value: string;
}

export interface IDynamicContentConfigOptions {
  id: number;
  dynamicContentConfigName: string;
}

export interface IDynamicContentConfig {
  config: IDynamicContentResult | null;
  accountTypes: IDynamicContentAccount[] | null;
  reviewTools: IDynamicContentReviewTools[] | null;
  configOptions: IDynamicContentConfigOptions[] | null;
  loading: boolean;
  errorMessage: string;
}
