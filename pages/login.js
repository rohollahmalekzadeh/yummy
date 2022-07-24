import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

import { Input, SuccessMessage, FormLayout, Form, Button } from '../components';

const defaultFormFields = {
  email: '',
  password: '',
};

export default function Login() {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const [errorMsg, setErrorMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const userRef = useRef();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  useEffect(() => {
    console.log(userRef.current);
  }, []);

  useEffect(() => {
    setErrorMsg('');
  }, [formFields.email, formFields.password]);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <main className="flex justify-around items-center lg:gap-10 px-4">
      <section className="hidden lg:inline  clip__image">
        <Image
          src="https://images.unsplash.com/photo-1642694358494-3d450f5ea978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=732&q=80"
          width={700}
          height={800}
          alt="login image"
          className="-translate-y-8 clip__image"
        />
      </section>

      <FormLayout>
        {success ? (
          <SuccessMessage
            SuccessMessage="You are logged in!"
            href="/"
            buttonMessage="Go to Home"
          />
        ) : (
          <>
            <h1 className="mx-auto mt-10 py-10 text-base lg:text-xl opacity-70">
              Login with your email and password
            </h1>

            <Form submitHandler={submitHandler}>
              <Input
                // ref={userRef}
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

              <div className="flex flex-col justify-around gap-4 items-center">
                <Button type="submit">Login</Button>
                <Button buttonType="google">Login with Google</Button>
              </div>
            </Form>

            <div className="flex flex-col justify-center items-center text-slate-700 py-10 ">
              <span className="py-2 text-xl">Need an Account?</span>
              <Link href="/register">
                <a>
                  <Button buttonType="inverted">Register</Button>
                </a>
              </Link>
            </div>
          </>
        )}
      </FormLayout>
    </main>
  );
}
