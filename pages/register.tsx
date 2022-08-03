import Image from '../node_modules/next/image'
import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react'
import Link from '../node_modules/next/link'

import {Input, SuccessMessage, FormLayout, Form, Button} from 'components'
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../lib/firebase'

//TODO *REFACTOR*

const defaultFormFields = {
  email: '',
  password: '',
  confirmPassword: '',
}
const defaultFormValidFields = {
  email: false,
  password: false,
  confirmPassword: false,
}

const defaultFormValidFieldsReducer = {
  passwordLetter: false,
  passwordLength: false,
  passwordNumber: false,
  passwordSymbol: false,
  email: false,
  confirmPassword: false,
}

const REGEX_email =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-+.]+(?:\.[a-zA-Z0-9-]+)*$/

const REGEX_PASSWORDLETTER = /^(?=.*[a-zA-Z]).{1,24}$/
const REGEX_PASSWORDLENGTH = /^(?=.*).{8,24}$/
const REGEX_PASSWORDNUMBER = /^(?=.*[0-9]).{1,24}$/
const REGEX_PASSWORDSYMBOL = /^(?=.*[!@#$%]).{1,24}$/

const reducer = (state: typeof defaultFormValidFieldsReducer, action: any) => {
  switch (action.type) {
    case 'email':
      return {...state, email: REGEX_email.test(action.payload)}
    case 'password':
      return {
        ...state,
        passwordLetter: REGEX_PASSWORDLETTER.test(action.payload),
        passwordLength: REGEX_PASSWORDLENGTH.test(action.payload),
        passwordNumber: REGEX_PASSWORDNUMBER.test(action.payload),
        passwordSymbol: REGEX_PASSWORDSYMBOL.test(action.payload),
      }
    case 'confirmPassword':
      return {
        ...state,
        confirmPassword: action.payload,
      }

    default:
      return state
  }
}

export default function Register() {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const [formValidFields, setFormValidFields] = useState(defaultFormValidFields)

  const [state, dispatch] = React.useReducer(
    reducer,
    defaultFormValidFieldsReducer,
  )

  const [success, setSuccess] = useState(false)
  const [errorMsg, setErrMsg] = useState('')

  useEffect(() => {
    setFormFields({...formFields})
    setFormValidFields({
      ...formValidFields,
      confirmPassword: !(formFields.password === formFields.confirmPassword),
    })
  }, [formFields.email, formFields.password, formFields.confirmPassword])

  console.log(state)
  useEffect(() => {
    setErrMsg('')
  }, [formFields])

  useEffect(() => {
    dispatch({
      type: 'confirmPassword',
      payload: formFields.confirmPassword === formFields.password,
    })
  }, [formFields.password, formFields.confirmPassword, state.confirmPassword])

  useEffect(() => {
    dispatch({type: 'email', payload: formFields.email})
  }, [formFields.email, state.email])

  useEffect(() => {
    dispatch({type: 'password', payload: formFields.password})
  }, [
    formFields.password,
    state.passwordLetter,
    state.passwordNumber,
    state.passwordSymbol,
    state.passwordLength,
  ])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target
    setFormFields({...formFields, [name]: value})
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (
      formValidFields.email ||
      formValidFields.password ||
      formValidFields.confirmPassword
    ) {
      setErrMsg('Invalid Entry, Check errors')
      return
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
            <h1 className="mx-auto mt-5 py-5 text-lg xl:text-xl opacity-70">
              Register with your email and password
            </h1>
            {errorMsg && (
              <h3 className="mx-auto p-5 text-red-500">{errorMsg}</h3>
            )}
            <Form onSubmit={handleSubmit}>
              <Input
                label="email"
                value={formFields.email}
                name="email"
                id="email"
                type="text"
                autoComplete="off"
                onChange={(e) => {
                  handleChange(e)
                }}
                errorMessage={'It should be a valid email address!'}
                errorCheck={state.email}
              />
              {}

              <Input
                label="password"
                value={formFields.password}
                name="password"
                id="password"
                type="text"
                autoComplete="off"
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

              <Input
                label="confirm password"
                value={formFields.confirmPassword}
                name="confirmPassword"
                id="confirm password"
                type="text"
                autoComplete="off"
                onChange={handleChange}
                errorMessage={"Passwords don't match!"}
                errorCheck={state.confirmPassword}
              />

              <Button type="submit" buttonType="inverted" className="mx-auto">
                Register
              </Button>
            </Form>

            <div className="flex flex-col justify-center items-center text-slate-700 ">
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
  )
}
