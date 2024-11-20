"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { logout } from "@/app/actions/logout";
import { getAllTodos } from "@/app/actions/todos";
import TodoTable from "@/components/table/todoTable";
import { Button } from "@nextui-org/react";

export const revalidate = 20;

export default function DashboardPage() {
  const [todos, setTodos] = useState([]);
  const columns = [
    { name: "TITLE", uid: "title" },
    { name: "CONTENT", uid: "content" },
    { name: "STATUS", uid: "status" },
    { name: "ACTIONS", uid: "actions" },
  ];


  useEffect(() => {
    async function getTodos() {
      const todos = await getAllTodos();
      console.log(todos);
      setTodos(todos);
    }
    getTodos();
  }, []);

  function testing(val) {
    setTodos(val);
  }
  return (
    <>
      <h1>Dashboard Page -TODOS</h1>
      <Button
        href="/dashboard/create-task"
        as={Link}
        color="primary"
        variant="solid"
      >
        Add Task
      </Button>

      <TodoTable rows={todos} columns={columns} test={testing} />
      <Link
        href={{
          pathname: "dashboard/create-task",
        }}
      >
        Create Task
      </Link>
      <button onClick={logout}>Logout</button>
    </>
  );
}
