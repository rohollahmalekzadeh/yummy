import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

import { Input, SuccessMessage } from '../components';

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
    // userRef.current.focus();
    console.log(userRef.current);
  }, []);

  useEffect(() => {
    setErrorMsg('');
  }, [formFields.email, formFields.password]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e);
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
        {success ? (
          <SuccessMessage SuccessMessage="You are logged in!">
            <Link href="#">
              <a className="flex justify-center cursor-pointer  text-2xl text-orange-500 hover:text-slate-100 hover:bg-orange-500  p-2 px-3 rounded-md  focus:text-slate-100 focus:bg-orange-400 transition duration-300 focus:outline-none hover:shadow-orange-400 hover:shadow-lg ">
                Go to Home
              </a>
            </Link>
          </SuccessMessage>
        ) : (
          <>
            <h1 className="mx-auto pt-10 py-10 text-base lg:text-xl opacity-70">
              Login with your email and password
            </h1>

            <form
              className="h-max xl:h-max flex flex-col justify-start py-10"
              onSubmit={submitHandler}
            >
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
                <button
                  type="submit"
                  className="cursor-pointer w-64  text-2xl bg-orange-500 text-slate-100  hover:text-orange-500 hover:bg-orange-100  p-1 px-3 rounded-md  focus:text-slate-100 focus:bg-orange-400 transition duration-300 focus:outline-none hover:shadow-orange-400 hover:shadow-lg"
                >
                  Login
                </button>

                <button className='cursor-pointer w-64  text-2xl text-white bg-sky-500 p-1 px-3 rounded-md focus:bg-sky-400 transition duration-300 focus:outline-none hover:shadow-sky-400 hover:shadow-lg "'>
                  Login with Google
                </button>
              </div>
            </form>

            <div className="flex flex-col justify-center items-center text-slate-700 py-10 ">
              <span className="py-2 text-xl">Need an Account?</span>

              <Link href="/register">
                <a className="cursor-pointer flex justify-center w-64 text-2xl text-orange-500 hover:text-slate-100 hover:bg-orange-500  p-1 px-3 rounded-md  focus:text-slate-100 focus:bg-orange-400 transition duration-300 focus:outline-none hover:shadow-orange-400 hover:shadow-lg ">
                  Register
                </a>
              </Link>
            </div>
          </>
        )}
      </section>
    </main>
  );
}
