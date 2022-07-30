import {ButtonHTMLAttributes, FC} from 'react'
import classNames from 'classnames'
import {motion} from 'framer-motion'

const buttonBase =
  'flex justify-center cursor-pointer w-64 text-2xl bg-orange-500 text-slate-100  hover:text-orange-500 hover:bg-orange-100  p-1 px-3 rounded-md  focus:text-slate-100 focus:bg-orange-500 transition duration-300 focus: focus:outline-none hover:shadow-orange-400 hover:shadow-lg'

export enum BUTTON_TYPES_CLASSES {
  google = 'text-white bg-sky-500 focus:bg-sky-400 hover:shadow-sky-400 hover:bg-sky-500 focus:bg-orange-400 hover:text-white ',

  inverted = 'bg-transparent text-orange-500 hover:text-white hover:bg-orange-500 focus:text-slate-100 hover:shadow-orange-400 focus:text-slate-100',
}

type ButtonProps = {
  children: string
  buttonType?: 'google' | 'inverted'
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = ({
  children,
  buttonType,
  className = '',
  ...otherProps
}) => {
  return (
    <button
      className={classNames(
        buttonBase,
        buttonType && BUTTON_TYPES_CLASSES[buttonType],
        className,
      )}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default Button
