import { logout } from "@/app/actions/logout";

export default function DashboardPage() {
  return (
    <>
      <h1>Dashboard Page</h1>
      <button onClick={logout}>Logout</button>
    </>
  )
}