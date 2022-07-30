import React from 'react'
import {FC, InputHTMLAttributes} from 'react'

type InputProps = {
  label: string
} & InputHTMLAttributes<HTMLInputElement>

const Input: FC<InputProps> = ({label, ...otherProps}) => {
  return (
    <div className="relative w-11/12 self-center">
      <label
        htmlFor={label}
        className={` bg-[#FFE9D0] px-4 transition-all duration-300 absolute top-5 left-3 text-xs  opacity-90   ${
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
    </div>
  )
}

export default Input
