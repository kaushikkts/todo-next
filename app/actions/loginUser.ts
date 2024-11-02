"use server";

import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";

import { loginSchema } from "@/schemas/login";

export async function loginUser(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, { schema: loginSchema });

  if (submission.status === "success") {
    if (
      submission.payload.email === "test@test.com" &&
      submission.payload.password === "password"
    ) {
      return redirect(`${process.env.BASE_URL}`);
    }
  }

  return redirect(`${process.env.BASE_URL}/login`);
}
