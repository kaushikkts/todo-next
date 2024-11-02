"use server";

import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";

import { registerSchema } from "@/schemas/register";
export const registerUser = async (prevState: unknown, formData: FormData) => {
  const submission = parseWithZod(formData, {
    schema: registerSchema,
  });

  if (submission.status === "success") {
    console.log(submission.payload);
    await fetch(`${process.env.API_BASE_URL}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submission.payload),
    });
    redirect("/login");
  }

};
