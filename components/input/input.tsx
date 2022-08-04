import React from 'react'
import {FC, InputHTMLAttributes} from 'react'

type InputProps = {
  label: string
  errorMessage?: string[] | string
  errorCheck?: boolean[] | boolean
} & InputHTMLAttributes<HTMLInputElement>

const Input: FC<InputProps> = ({
  label,
  errorCheck,
  errorMessage,
  ...otherProps
}) => {
  const errorCheck1 = Array.isArray(errorCheck)
    ? errorCheck.every((error) => {
        return error === true
      })
    : errorCheck

  return (
    <div className="relative w-11/12 self-center ">
      <label
        htmlFor={label}
        className={`bg-[#FFE9D0] px-4 transition-all duration-300 absolute top-5 left-3 text-xs  opacity-90   ${
          otherProps.value &&
          ' text-slate-400 -translate-y-7 -translate-x-1 text-lg'
        }`}
      >
        {label.toUpperCase()}
      </label>
      <input
        className={`transition-all duration-300 text-slate-700 w-full p-3 px-7 mb-5 border-b-2 border-white focus:outline-0 bg-transparent text-lg rounded-md ${
          otherProps.value && ' border-2'
        }`}
        {...otherProps}
      />

      {Array.isArray(errorMessage) && otherProps.value
        ? errorMessage.map((msg, idx) => (
            <div
              key={idx}
              className={` 
                ${
                  Array.isArray(errorCheck) &&
                  errorCheck[idx] &&
                  'text-emerald-500'
                }
                text-red-500 text-sm mb-1 ml-4 -translate-y-4 transition-color duration-300`}
            >
              {msg}
            </div>
          ))
        : !Array.isArray(errorCheck) &&
          otherProps.value && (
            <div
              className={` ${
                errorCheck1 && 'text-emerald-500'
              } text-red-500 text-sm mb-1 ml-4 -translate-y-4 transition-color duration-300`}
            >
              {errorMessage}
            </div>
          )}
    </div>
  )
}

export default Input
