import * as yup from "yup"

const logInValidation = yup.object({
  email: yup.string().email("Invalid Email").required("Email Address is required!"),
  password: yup.string().required("Password is required!")
});

const otpValidation = yup.object({
  otp: yup.string().required().length(6, "OTP must be 6 digits").matches(/^\d{6}$/, 'OTP must contain only numbers')
});

export {
  logInValidation,
  otpValidation
};