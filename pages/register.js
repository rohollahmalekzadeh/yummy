import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';

import { Input, SuccessMessage, FormLayout, Form, Button } from '../components';

const defaultFormFields = {
  email: '',
  password: '',
  confirmPassword: '',
};

const USER_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export default function Login() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [success, setSuccess] = useState(false);
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
          width={700}
          height={800}
          alt="register image"
          className="-translate-y-8 clip__image"
        />
      </section>

      <FormLayout>
        {success ? (
          <SuccessMessage
            SuccessMessage="You are registered!"
            href="/login"
            buttonMessage="Go to login"
          />
        ) : (
          <>
            <h1 className="mx-auto mt-20 py-10 text-lg xl:text-xl opacity-70">
              Register with your email and password
            </h1>
            <Form onSubmit={handleSubmit}>
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

              <Button type="submit" buttonType="inverted" className="mx-auto">
                Register
              </Button>
            </Form>

            <div className=" flex flex-col justify-center items-center text-slate-700 py-10 mb-14 ">
              <span className="py-2 text-xl">Already have an Account?</span>

              <Link href="/login">
                <a>
                  <Button>Login</Button>
                </a>
              </Link>
            </div>
          </>
        )}
      </FormLayout>
    </main>
  );
}
