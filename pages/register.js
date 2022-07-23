import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';

import { Input } from '../components';

const defaultFormFields = {
  email: '',
  password: '',
  confirmPassword: '',
};

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export default function Login() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [errorMsg, setErrMsg] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !USER_REGEX.test(formFields.email) ||
      !PWD_REGEX.test(formFields.password)
    ) {
      setErrMsg('Invalid Entry');
      return;
    }
  };

  return (
    <main className="flex justify-around items-center lg:gap-10 px-4">
      <section className="hidden lg:inline  clip__image">
        <Image
          src="https://images.unsplash.com/photo-1642694358494-3d450f5ea978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=732&q=80"
          width={800}
          height={850}
          alt="login image"
          className="-translate-y-8 clip__image"
        />
      </section>

      <section className="w-8/12 md:w-6/12 xl:w-4/12 flex flex-col shadow-2xl rounded-xl backdrop-blur-3xl bg-white/20 xl:-translate-y-7">
        <div className="mx-auto py-10 opacity-70 text-base  md:text-xl">
          Register with your email and password
        </div>
        <form
          className="h-max xl:h-max flex flex-col justify-start py-10"
          onSubmit={handleSubmit}
        >
          <Input
            label="email"
            required
            value={formFields.email}
            name="email"
            id="email"
            type="text"
            autoComplete="off"
            onChange={handleChange}
          />

          <Input
            label="password"
            required
            value={formFields.password}
            name="password"
            id="password"
            type="password"
            onChange={handleChange}
          />

          <Input
            label="confirm password"
            required
            value={formFields.confirmPassword}
            name="confirmPassword"
            id="confirm password"
            type="password"
            onChange={handleChange}
          />
          <div className="flex justify-around">
            <button
              type="submit"
              className="cursor-pointer  w-72 text-2xl text-orange-500 hover:text-slate-100 hover:bg-orange-500  p-1 px-3 rounded-md  focus:text-slate-100 focus:bg-orange-400 transition duration-300 focus:outline-none hover:shadow-orange-400 hover:shadow-lg "
            >
              Register
            </button>
          </div>
        </form>

        <div className="flex flex-col justify-center items-center text-slate-700 py-10 ">
          <span className="py-2 text-xl">Already have an Account?</span>

          <Link href="/login">
            <a
              className="
            cursor-pointer w-72  text-2xl flex justify-center bg-orange-500 text-slate-100  hover:text-orange-500 hover:bg-orange-100  p-1 px-3 rounded-md  focus:text-slate-100 focus:bg-orange-400 transition duration-300 focus:outline-none hover:shadow-orange-400 hover:shadow-lg"
            >
              Login
            </a>
          </Link>
        </div>
      </section>
    </main>
  );
}
