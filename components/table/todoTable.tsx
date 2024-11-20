"use client";

import {
  Chip,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from "@nextui-org/react";
import Link from "next/link";
import React, { useEffect } from "react";

import { deleteTodo, getAllTodos } from "@/app/actions/todos";

import { DeleteIcon } from "./DeleteIcon";
import { EditIcon } from "./EditIcon";
import { EyeIcon } from "./EyeIcon";

const statusColorMap = {
  IN_PROGRESS: "primary",
  NOT_STARTED: "info",
  COMPLETED: "success",
  CANCELLED: "danger",
};

export default function TodoTable({ rows, columns, test }) {
  const renderCell = React.useCallback((todo, columnKey) => {
    const cellValue = todo[columnKey];
    async function deleteATodo(selectedTask) {
      console.log(selectedTask);
      await deleteTodo(selectedTask.id);
      const response = await getAllTodos();
      test(response);
    }
    switch (columnKey) {
      case "name":
        return <p>{todo.email}</p>;
      case "description":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">
              {todo.team}
            </p>
          </div>
        );
      case "status":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[todo.status]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center justify-center gap-2">
            <Tooltip content="Details">
              <span className="cursor-pointer text-lg text-success active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="cursor-pointer text-lg text-warning active:opacity-50">
                <Link href={"/dashboard/create-task"}>
                  <EditIcon />
                </Link>
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span
                className="cursor-pointer text-lg text-danger active:opacity-50"
                onClick={() => deleteATodo(todo)}
              >
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <>
      <Table aria-label="Example table with custom cells">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}
