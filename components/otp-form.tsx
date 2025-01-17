"use client"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Label } from "@radix-ui/react-label";
import { useFormik } from "formik";
import { otpValidation } from "@/validations/auth.validations";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react"
import { useState } from "react";

const OtpVerifyForm = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { isLoaded, setActive, signUp } = useSignUp();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      otp: ""
    },
    validationSchema: otpValidation,

    onSubmit: async (values) => {
      try {
        setIsLoading(prev => !prev);
        const otpResponse = await signUp?.attemptEmailAddressVerification({
          code: values.otp
        });

        if (otpResponse?.status !== "complete") {
          console.log(otpResponse);
        };
        if (otpResponse?.status === "complete" && setActive) {
          await setActive({ session: otpResponse.createdSessionId });
          router.push("/dashboard");
        };
        console.log(values);
      } catch (error: any) {
        setErrorMessage(error.errors[0].message);
        console.log(error);
      }finally{
        setIsLoading(prev => !prev);
      }
    }
  });

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        if (!isLoaded) {
          return;
        };
        formik.handleSubmit();
      }}>
        <div className="flex flex-col items-center mt-3 gap-1">
          <Label className="text-lg">One-Time Password</Label>
          <InputOTP maxLength={6}
            onChange={(e) => {
              formik.setFieldValue("otp", e);
              formik.handleChange(e);
              setErrorMessage(null);
            }}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <p className="text-red-500 text-sm">{formik.errors.otp}</p>
          { errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p> }
          <p className="text-xs text-gray-500">Please enter the OTP sent to your email.</p>
          {isLoading ? (
            <Button disabled>
              <Loader2 className="animate-spin" />Please wait
            </Button>) : (<Button type="submit" className="mt-3 rounded-lg">Submit</Button>)
          }
        </div>
      </form>
    </div>
  )
};

export { OtpVerifyForm };