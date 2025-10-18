"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
// import { verifySecret, sendEmailOTP } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";
const OTPModal =  ({
  accountId,
  email,
}: {
  accountId: string;
  email: string;
}) => {
  return (
    <div>OTPModal</div>
  )
}

export default OTPModal