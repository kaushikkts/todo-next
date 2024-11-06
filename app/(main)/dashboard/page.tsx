import { logout } from "@/app/actions/logout";

export default async function DashboardPage() {
  return (
    <>
      <h1>Dashboard Page -TODOS</h1>
      <button onClick={logout}>Logout</button>
    </>
  );
}
