import React, {FC, InputHTMLAttributes} from 'react'
import classNames from 'classnames'

const baseStyle =
  'transition-all duration-300 text-slate-700 w-full p-3 px-7 mb-5 border-b-2 border-white focus:outline-0 bg-transparent text-lg rounded-md'

type TextInputProps = {
  className?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextInput: FC<TextInputProps> = ({className, ...otherProps}) => {
  return (
    <input
      className={classNames(
        `${baseStyle} ${otherProps.value && ' border-2'}`,
        className,
      )}
      {...otherProps}
    />
  )
}

export default TextInput
