import { NextUIProvider } from "@nextui-org/react";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const accessToken = (await cookies()).get("accessToken");
  if (!accessToken) {
    return (
      <NextUIProvider>
        <main>
          <button>
            <Link href="/login">Login</Link>
          </button>
        </main>
      </NextUIProvider>
    );
  }
  return redirect("/dashboard");
}
