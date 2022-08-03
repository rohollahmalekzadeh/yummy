export const defaultFormFields = {
  email: '',
  password: '',
  confirmPassword: '',
}

export const defaultFormValidFieldsReducer = {
  email: false,
  passwordLetter: false,
  passwordLength: false,
  passwordNumber: false,
  passwordSymbol: false,
  confirmPassword: false,
}

export const REGEX_email =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-+.]+(?:\.[a-zA-Z0-9-]+)*$/
export const REGEX_PASSWORDLETTER = /^(?=.*[a-zA-Z]).{1,24}$/
export const REGEX_PASSWORDLENGTH = /^(?=.*).{8,24}$/
export const REGEX_PASSWORDNUMBER = /^(?=.*[0-9]).{1,24}$/
export const REGEX_PASSWORDSYMBOL = /^(?=.*[!@#$%]).{1,24}$/

type reducerAction =
  | {type: 'email'; payload: string}
  | {
      type: 'password'
      payload: string
    }
  | {
      type: 'confirmPassword'
      payload: boolean
    }

export const reducer = (
  state: typeof defaultFormValidFieldsReducer,
  action: reducerAction,
) => {
  switch (action.type) {
    case 'email':
      return {
        ...state,
        email:
          typeof action.payload === 'string' &&
          REGEX_email.test(action.payload),
      }
    case 'password':
      return {
        ...state,
        passwordLetter:
          typeof action.payload === 'string' &&
          REGEX_PASSWORDLETTER.test(action.payload),
        passwordLength:
          typeof action.payload === 'string' &&
          REGEX_PASSWORDLENGTH.test(action.payload),
        passwordNumber:
          typeof action.payload === 'string' &&
          REGEX_PASSWORDNUMBER.test(action.payload),
        passwordSymbol:
          typeof action.payload === 'string' &&
          REGEX_PASSWORDSYMBOL.test(action.payload),
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
