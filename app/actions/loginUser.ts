"use server";

import { parseWithZod } from "@conform-to/zod";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { loginSchema } from "@/schemas/login";
import CookieDecoder from "@/helpers/cookie-decoder";

export async function loginUser(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, { schema: loginSchema });

  if (submission.status === "success") {
    const response = await fetch(`${process.env.API_BASE_URL}/api/auth/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submission.payload),
    });
    if (response.status) {
      const data = await response.json();
      (await cookies()).set("accessToken", data.accessToken);
      (await cookies()).set("refreshToken", data.refreshToken);
      (await cookies()).set("userId", data.id);
      return redirect("/dashboard");
    }
  }
  return;
}
