import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <h1>Welcome to the To Do App.</h1>
        <button>
          <Link href={`${process.env.BASE_URL}/login`}>Login</Link>
        </button>
      </main>
    </>
  );
}
