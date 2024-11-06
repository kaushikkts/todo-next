"use client";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import Link from "next/link";
import { useActionState } from "react";

import { loginUser } from "@/app/actions/loginUser";
import LoginFormSubmitState from "@/components/login-form-submit-state";
import { loginSchema } from "@/schemas/login";

export default function LoginPage() {
  const [lastResult, action] = useActionState(loginUser, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: loginSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  return (
    <>
      <form
        className="mx-auto mt-16 max-w-xl sm:mt-8"
        action={action}
        id={form.id}
        onSubmit={form.onSubmit}
      >
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-balance text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
              Login to start creating todos
            </h1>
          </div>
          <div className="mt-5">
            <label
              htmlFor="email"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                id="email"
                key={fields.email.key}
                name={fields.email.name}
                defaultValue={fields.email.initialValue}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
            </div>
            <p className="mt-3 text-red-500">{fields.email.errors}</p>
          </div>
          <div className="mt-5">
            <label
              htmlFor="password"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Password
            </label>
            <div className="mt-2.5">
              <input
                type="password"
                id="password"
                name={fields.password.name}
                key={fields.password.key}
                defaultValue={fields.password.initialValue}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
            </div>
            <p className="mt-3 text-red-500">{fields.password.errors}</p>
          </div>

          <div className="mt-10">
            <LoginFormSubmitState
              NextText={"Logging In..."}
              PrevText={"Login"}
            />
          </div>
          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Not a user yet?{" "}
            <Link
              href={`/register`}
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Register
            </Link>
          </p>
        </div>
      </form>
    </>
  );
}
