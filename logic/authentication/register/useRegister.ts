import React, {ChangeEvent} from 'react'
import {
  defaultFormFields,
  defaultFormValidFieldsReducer,
  reducer,
} from './register.utils'

const useRegister = (
  formFields: typeof defaultFormFields,
  setFormFields: any,
) => {
  const [state, dispatch] = React.useReducer(
    reducer,
    defaultFormValidFieldsReducer,
  )

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target
    setFormFields({...formFields, [name]: value})
  }

  React.useEffect(() => {
    setFormFields({...formFields})
  }, [formFields.email, formFields.password, formFields.confirmPassword])

  React.useEffect(() => {
    dispatch({
      type: 'confirmPassword',
      payload: formFields.confirmPassword === formFields.password,
    })
  }, [formFields.password, formFields.confirmPassword, state.confirmPassword])

  React.useEffect(() => {
    dispatch({type: 'email', payload: formFields.email})
  }, [formFields.email, state.email])

  React.useEffect(() => {
    dispatch({type: 'password', payload: formFields.password})
  }, [
    formFields.password,
    state.passwordLetter,
    state.passwordNumber,
    state.passwordSymbol,
    state.passwordLength,
  ])

  return {handleChange, state}
}

export default useRegister
