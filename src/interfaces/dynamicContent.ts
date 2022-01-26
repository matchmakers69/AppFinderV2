export interface IUserRole {
  id: number;
  accountTypeName: string;
}

export interface IConfigOptions {
  id: number | string;
  dynamicContentConfigName: string;
}

export interface IDynamicContentName {
  result: IConfigOptions[];
  success: boolean;
}

export interface IDynamicContentNameOptions {
  result: IConfigOptions[];
}

export interface IDynamicContentSection {
  id: number;
  dynamicContentSectionName: string;
}
export interface IDynamicContent {
  accountTypeId: number;
  dynamicContentConfigName: string;
  id: number;
  reviewToolId: number;
  sections: IDynamicContentSection[];
}

export interface IDynamicContentReviewTools {
  name: string;
  value: string;
}

export interface IDynamicContentConfig {
  result: IDynamicContent;
}

export interface IAccountType {
  result: IUserRole;
}

export interface IReviewTools {
  result: IDynamicContentReviewTools;
}

export interface IDynamicConfigOptions {
  result: IConfigOptions;
}
