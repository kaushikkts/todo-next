"use client";

import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { Input, Textarea } from "@nextui-org/input";
import {
  Button,
  DatePicker,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

import { createTodoAction } from "@/app/actions/todos";
import { todoSchema } from "@/schemas/todo";

export default function TodoModal({ isModalOpen = false }) {
  const { pending } = useFormStatus();
  const { onOpenChange } = useDisclosure();
  const router = useRouter();
  const [lastResult, action] = useActionState(createTodoAction, undefined);

  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: todoSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  // function saveTask() {
  //   // call save task action api
  // }
  return (
    <>
      <Modal
        size="5xl"
        onOpenChange={onOpenChange}
        defaultOpen={isModalOpen}
        hideCloseButton={true}
        isDismissable={false}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <form id={form.id} onSubmit={form.onSubmit} action={action}>
                <ModalHeader className="flex flex-col items-center gap-1">
                  CREATE NEW TASK
                </ModalHeader>
                <ModalBody>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <DatePicker
                        autoFocus
                        label="Task Start Date"
                        variant="bordered"
                        showMonthAndYearPickers
                        name={fields.startDate.name}
                        key={fields.startDate.key}
                        id="startDate"
                        defaultValue={fields.endDate.initialValue}
                      />
                      <p className="text-red-500">{fields.startDate.errors}</p>
                    </div>
                    <div>
                      <DatePicker
                        label="Task End Date"
                        variant="bordered"
                        showMonthAndYearPickers
                        name={fields.endDate.name}
                        key={fields.endDate.key}
                        id="startDate"
                        defaultValue={fields.endDate.initialValue}
                      />
                      <p className="text-red-500">{fields.endDate.errors}</p>
                    </div>
                    <Input
                      className="col-span-2"
                      label="Task Titile"
                      placeholder="Emter Task Title"
                      variant="bordered"
                      name={fields.title.name}
                      key={fields.title.key}
                      defaultValue={fields.title.initialValue}
                      id="title"
                    />
                    <p className="text-red-500">{fields.title.errors}</p>
                    <Textarea
                      className="col-span-2"
                      label="Task Content"
                      placeholder="Enter Task Content"
                      variant="bordered"
                      name={fields.content.name}
                      key={fields.content.key}
                      id="content"
                    />
                    <p className="text-red-500">{fields.content.errors}</p>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="danger"
                    variant="flat"
                    onPress={() => {
                      onClose();
                      router.back();
                    }}
                  >
                    Close
                  </Button>
                  <Button color="primary" type="submit" isLoading={pending}>
                    {pending ? "Creating New Task" : "Create Task"}
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
