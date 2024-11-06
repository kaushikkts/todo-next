"use client";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useActionState } from "react";

import { registerUser } from "@/app/actions/registerUser";
import LoginFormSubmitState from "@/components/login-form-submit-state";
import { registerSchema } from "@/schemas/register";
export default function RegisterPage() {
  const [lastResult, action] = useActionState(registerUser, undefined);

  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: registerSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <form
      className="mx-auto mt-16 max-w-xl sm:mt-8"
      id={form.id}
      onSubmit={form.onSubmit}
      action={action}
      noValidate
    >
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Tell us about yourself
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Register to start creating todos and improving your life!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name={fields.firstName.name}
                id="first-name"
                key={fields.firstName.key}
                defaultValue={fields.firstName.initialValue}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
            </div>
            <p className="text-red-500">{fields.firstName.errors}</p>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name={fields.lastName.name}
                id="last-name"
                key={fields.lastName.key}
                defaultValue={fields.lastName.initialValue}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
            </div>
            <p className="text-red-500">{fields.lastName.errors}</p>
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Phone
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name={fields.phone.name}
                id="phone"
                key={fields.phone.key}
                defaultValue={fields.phone.initialValue}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
            </div>
            <p className="text-red-500">{fields.phone.errors}</p>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name={fields.email.name}
                id="email"
                key={fields.email.key}
                defaultValue={fields.email.initialValue}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
            </div>
            <p className="text-red-500">{fields.email.errors}</p>
          </div>
          <div>
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
            <p className="text-red-500">{fields.password.errors}</p>
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Confirm Password
            </label>
            <div className="mt-2.5">
              <input
                type="password"
                id="confirmPassword"
                name={fields.confirmPassword.name}
                key={fields.confirmPassword.key}
                defaultValue={fields.confirmPassword.initialValue}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
            </div>
            <p className="text-red-500">{fields.confirmPassword.errors}</p>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="line1"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Address Line 1
            </label>
            <div className="mt-2.5">
              <input
                type="line1"
                id="line1"
                name={fields.address.getFieldset().line1.name}
                key={fields.address.getFieldset().line1.key}
                defaultValue={fields.address.getFieldset().line1.initialValue}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
            </div>
            <p className="text-red-500">
              {fields.address.getFieldset().line1.errors}
            </p>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="line2"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Address Line 2
            </label>
            <div className="mt-2.5">
              <input
                type="line2"
                id="line2"
                name={fields.address.getFieldset().line2.name}
                key={fields.address.getFieldset().line2.key}
                defaultValue={fields.address.getFieldset().line2.initialValue}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
            </div>
            <p className="text-red-500">
              {fields.address.getFieldset().line2.errors}
            </p>
          </div>
          <div>
            <label
              htmlFor="city"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              City
            </label>
            <div className="mt-2.5">
              <input
                type="city"
                id="city"
                name={fields.address.getFieldset().city.name}
                key={fields.address.getFieldset().city.key}
                defaultValue={fields.address.getFieldset().city.initialValue}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
            </div>
            <p className="text-red-500">
              {fields.address.getFieldset().city.errors}
            </p>
          </div>
          <div>
            <label
              htmlFor="city"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              State
            </label>
            <div className="mt-2.5">
              <input
                type="state"
                id="state"
                maxLength={2}
                name={fields.address.getFieldset().state.name}
                key={fields.address.getFieldset().state.key}
                defaultValue={fields.address.getFieldset().state.initialValue}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
            </div>
            <p className="text-red-500">
              {fields.address.getFieldset().state.errors}
            </p>
          </div>
          <div>
            <label
              htmlFor="zip"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Zip Code
            </label>
            <div className="mt-2.5">
              <input
                type="zip"
                id="zip"
                name={fields.address.getFieldset().zip.name}
                key={fields.address.getFieldset().zip.key}
                defaultValue={fields.address.getFieldset().zip.initialValue}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
            </div>
            <p className="text-red-500">
              {fields.address.getFieldset().zip.errors}
            </p>
          </div>
        </div>
        <div className="mt-10">
          <LoginFormSubmitState
            NextText={"Registering..."}
            PrevText={"Register"}
          />
        </div>
        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Already a user?{" "}
          <a
            href={`${process.env.BASE_URL}/login`}
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Login
          </a>
        </p>
      </div>
    </form>
  );
}
