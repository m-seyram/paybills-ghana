import * as yup from "yup";

//Sign In
export const signInSchema = yup.object({
  phone: yup
    .string()
    .matches(/^\d{9,12}$/, "Invalid phone number")
    .required("Phone number is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

//Sign Up

export const signUpSchema = yup.object({
  phone: yup
    .string()
    .matches(/^\d{9,12}$/, "Invalid phone number")
    .required("Phone number is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
  termsAccepted: yup
    .boolean()
    .oneOf([true], "You must accept the terms and conditions")
    .required("You must accept the terms and conditions"),
});
