import * as yup from "yup";

export const dynamicContentNameSchema = yup.object().shape({
  dynamicContentConfigName: yup.string().trim().min(2).max(20).required(),
});
