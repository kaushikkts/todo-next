"use server";

import { parseWithZod } from "@conform-to/zod";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { registerSchema } from "@/schemas/register";

export const createTodoAction = async (
  prevState: unknown,
  formData: FormData,
) => {
  const submission = parseWithZod(formData, {
    schema: registerSchema,
  });
  const userId = (await cookies()).get("userId")?.value;
  const payload = {...submission.payload, userId};

  console.log(submission.payload);
  const response = await fetch(`${process.env.API_BASE_URL}/api/todo`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${(await cookies()).get("accessToken")?.value}`,
    },
    body: JSON.stringify(payload),
  });
  console.log(response.status);
  if (response.ok && response.status.toString().startsWith("20")) {
    console.log('entered');
    return redirect('/dashboard');
  }
};
export const getAllTodos = async () => {
  const accessToken = (await cookies()).get("accessToken")?.value;
  const userId = (await cookies()).get("userId")?.value;
  // if (!accessToken) {
  //   return redirect("/login");
  // }

  const response = await fetch(`${process.env.API_BASE_URL}/api/todos/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });


  if (response.ok) {
    if (response.status === 403) {
      const accessTokenResponse = await fetch(
        `${process.env.API_BASE_URL}/api/auth/token`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            refreshToken: (await cookies()).get("refreshToken")?.value,
          }),
        },
      );
      if (accessTokenResponse.ok) {
        const data = await accessTokenResponse.json();
        (await cookies()).set("accessToken", data.accessToken);
      }
    }
    return response.json();
  }
  return redirect("/login");
};
