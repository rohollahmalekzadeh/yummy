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

    // if (name === 'confirmPassword') {
    //   dispatch({
    //     type: name,
    //     payload: formFields.confirmPassword == formFields.password,
    //   })
    // }

    if (name === 'email' || name === 'password')
      dispatch({type: name, payload: value})
  }

  React.useEffect(() => {
    dispatch({
      type: 'confirmPassword',
      payload: formFields.confirmPassword === formFields.password,
    })
  }, [formFields.password, formFields.confirmPassword, state.confirmPassword])

  return {handleChange, state}
}

export default useRegister
