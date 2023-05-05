import * as yup from "yup";
export const validationSchema = yup.object({
    password: yup.string().min(8).required(),
    email: yup.string().email().required(),
    
  });