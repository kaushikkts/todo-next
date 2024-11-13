"use client";

import { logout } from "@/app/actions/logout";
import TodoTable from "@/components/table/todoTable";

export const revalidate = 20;

export default function DashboardPage() {
  const rows = [
    {
      key: "1",
      name: "Tony Reichert",
      role: "CEO",
      status: "Active",
    },
    {
      key: "2",
      name: "Zoey Lang",
      role: "Technical Lead",
      status: "Paused",
    },
    {
      key: "3",
      name: "Jane Fisher",
      role: "Senior Developer",
      status: "Active",
    },
    {
      key: "4",
      name: "William Howard",
      role: "Community Manager",
      status: "Vacation",
    },
  ];

  const columns = [
    {
      key: "name",
      label: "NAME",
    },
    {
      key: "role",
      label: "ROLE",
    },
    {
      key: "status",
      label: "STATUS",
    },
  ];
  return (
    <>
      <h1>Dashboard Page -TODOS</h1>
      <TodoTable rows={rows} columns={columns} />
      <button onClick={logout}>Logout</button>
    </>
  );
}
