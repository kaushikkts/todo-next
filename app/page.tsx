import Link from "next/link";

export default function Home() {
  return (
      <>
        <main>
          <h1>Welcome to the To Do App.</h1>
          <button>
            <Link href={process.env.LOGIN_URL} >Login</Link>
          </button>
        </main>
      </>
  );
}
