"use server";

import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";

import { registerSchema } from "@/schemas/register";
export const registerUser = async (prevState: unknown, formData: FormData) => {
  console.log("entered registerUser.ts");
  const submission = parseWithZod(formData, {
    schema: registerSchema,
  });

  console.log(submission);
  if (submission.status === "success") {
    return redirect(`${process.env.BASE_URL}/login`);
  }

  // await fetch(`${process.env.API_BASE_URL}/api/auth/register`, {
  //   method: "POST",
  //   body: JSON.stringify(submission.payload),
  // });
};
