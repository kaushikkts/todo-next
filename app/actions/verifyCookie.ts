"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export const getAllTodos = async () => {
  const accessToken = (await cookies()).get("accessToken");
  if (!accessToken) {
    return redirect("/login");
  }

  const response = await fetch(`${process.env.API_BASE_URL}/api/todos`, {
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
  }
  return redirect("/login");
};
