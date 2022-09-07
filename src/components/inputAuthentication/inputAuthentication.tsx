import React, {FC, InputHTMLAttributes} from 'react'
import TextInput from 'src/components/ui/textInput'

type InputAuthenticationProps = {
  label: string
  errorMessage?: string[]
  errorCheck?: boolean[]
} & InputHTMLAttributes<HTMLInputElement>

const InputAuthentication: FC<InputAuthenticationProps> = ({
  label,
  errorCheck,
  errorMessage,
  ...otherProps
}) => {
  return (
    <div className="relative w-11/12 self-center">
      <label
        htmlFor={label}
        className={`bg-[#FFE9D0] px-4 transition-all duration-300 absolute top-5 left-3 text-xs  opacity-90 ${
          otherProps.value &&
          ' text-slate-400 -translate-y-7 -translate-x-1 text-lg'
        }`}
      >
        {label.toUpperCase()}
      </label>

      <TextInput {...otherProps} />

      {errorMessage &&
        otherProps.value &&
        errorMessage.map((msg, idx) => (
          <div
            key={idx}
            className={` 
                ${
                  Array.isArray(errorCheck) &&
                  errorCheck[idx] &&
                  'text-emerald-500'
                }
                text-red-500 text-sm ml-4 -translate-y-4 transition-color duration-300`}
          >
            {msg}
          </div>
        ))}
    </div>
  )
}

export default InputAuthentication
