import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const accessToken = (await cookies()).get("accessToken");
  console.log(accessToken);
  if (!accessToken) {
    return (
      <>
        <main>
          <button>
            <Link href="/login">Login</Link>
          </button>
        </main>
      </>
    );
  }
  return redirect("/dashboard");
}
