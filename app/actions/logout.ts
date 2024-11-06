"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export async function logout() {

  fetch(`${process.env.API_BASE_URL}/api/auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      refreshToken: (await cookies()).get("refreshToken")?.value,
    }),
  });
    (await cookies()).delete("refreshToken");
    (await cookies()).delete("userId");
    (await cookies()).delete("accessToken");
  return redirect("/login");
}
