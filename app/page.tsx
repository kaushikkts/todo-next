
import Link from "next/link";

export default function Home() {
  return (
      <>
        <main>
          <h1>Welcome to the To Do App.</h1>
          <button>
            <Link href="http://localhost:3000/auth/login" >Login</Link>
          </button>
        </main>
      </>
  );
}
