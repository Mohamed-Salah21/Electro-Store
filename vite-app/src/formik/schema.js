import { object, string } from "yup";
export const login_schemaValidations = object({
  email: string().email().required(),
  password: string().required(),
});

export const registation_validationsSchema = object({
  email: string().email().required(),
  password: string().required(),
  username: string().required(),
  phone: string().required(),
  image: string(),
});
