"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { logout } from "@/app/actions/logout";
import TodoTable from "@/components/table/todoTable";
import { getAllTodos } from "@/app/actions/todos";

export const revalidate = 20;

export default function DashboardPage() {
  const [openModal, setOpenModal] = useState(false);
  const [todos, setTodos] = useState([]);
  const columns = [
    { name: "TITLE", uid: "title" },
    { name: "CONTENT", uid: "content" },
    { name: "STATUS", uid: "status" },
    { name: "ACTIONS", uid: "actions" },
  ];

  function shouldOpenModal() {
    setOpenModal(() => !openModal);
  }

  useEffect(() => {
    async function getTodos() {

      const todos = await getAllTodos();
      console.log(todos);
      setTodos(todos);
    }
    getTodos();
  }, []);



  return (
    <>
      <h1>Dashboard Page -TODOS</h1>
      <TodoTable
        rows={todos}
        columns={columns}
        shouldOpenModal={shouldOpenModal}
      />
      <Link href={"/dashboard/create-task"}>Create Task</Link>
      <button onClick={logout}>Logout</button>
    </>
  );
}
