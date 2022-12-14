import React, {FormEvent, useEffect, useState} from 'react'
import {NextPage} from 'next'
import Image from 'node_modules/next/image'
import Link from 'node_modules/next/link'

import SuccessMessage from 'src/components/successMessage/successMessage'
import FormLayout from 'src/components/ui/formLayout'
import Form from 'src/components/ui/form'
import Button from 'src/components/ui/button'
import InputAuthentication from 'src/components/inputAuthentication/inputAuthentication'

import useRegister from 'src/utils/hooks/authentication/useRegister'
import {defaultFormFields} from 'src/utils/hooks/authentication/register.utils'

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from 'src/lib/firebase'

const Register: NextPage = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const {state, handleChange} = useRegister(formFields, setFormFields)

  const [success, setSuccess] = useState(false)
  const [errorMsg, setErrMsg] = useState('')

  useEffect(() => {
    errorMsg.length > 0 && setErrMsg('')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formFields])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (
      !Object.values(state).every((item) => {
        return item === true
      })
    ) {
      setErrMsg('Invalid Entry, check errors')
    }

    try {
      const {user}: any = await createAuthUserWithEmailAndPassword(
        formFields.email,
        formFields.password,
      )
      setSuccess((prev) => !prev)
      await createUserDocumentFromAuth(user)
      setFormFields(defaultFormFields)
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        setErrMsg('Cannot create user, email already in use')
      } else if (error.code === 'auth/invalid-email') {
        setErrMsg('Cannot create user, invalid email')
      } else {
        console.log('user creation encountered an error', error)
      }
    }
  }

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
            <h1 className="mx-auto py-5 text-lg xl:text-xl opacity-70">
              Register with your email and password
            </h1>
            {errorMsg && (
              <h3 className="mx-auto p-5 text-red-500">{errorMsg}</h3>
            )}
            <Form onSubmit={handleSubmit}>
              <InputAuthentication
                label="email"
                required
                value={formFields.email}
                name="email"
                id="email"
                type="text"
                autoComplete="off"
                onChange={handleChange}
                errorMessage={['It should be a valid email address!']}
                errorCheck={[state.email]}
              />

              <InputAuthentication
                label="password"
                required
                value={formFields.password}
                name="password"
                id="password"
                type="password"
                onChange={handleChange}
                errorMessage={[
                  'Password should be 8-20 characters',
                  'Password include at least 1 letter',
                  'Password include at least 1 number',
                  'Password include at least 1 symbol',
                ]}
                errorCheck={[
                  state.passwordLength,
                  state.passwordLetter,
                  state.passwordNumber,
                  state.passwordSymbol,
                ]}
              />

              <InputAuthentication
                label="confirm password"
                value={formFields.confirmPassword}
                name="confirmPassword"
                required
                id="confirm password"
                type="password"
                onChange={handleChange}
                errorMessage={["Passwords don't match!"]}
                errorCheck={[state.confirmPassword]}
              />

              <Button
                type="submit"
                buttonType="inverted"
                className="mx-auto w-60"
              >
                Register
              </Button>
            </Form>

            <div className="flex flex-col justify-center items-center text-slate-700 ">
              <span className="py-2 text-xl">Already have an Account?</span>

              <Link href="/login">
                <a>
                  <Button className="w-60">Login</Button>
                </a>
              </Link>
            </div>
          </>
        )}
      </FormLayout>
    </main>
  )
}

export default Register
