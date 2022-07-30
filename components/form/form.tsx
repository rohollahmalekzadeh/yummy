import classNames from 'classnames'
import {FormHTMLAttributes, FC, ReactNode} from 'react'

type FormProps = {
  className?: string
  children: ReactNode
} & FormHTMLAttributes<HTMLFormElement>

const Form: FC<FormProps> = ({className, children, ...otherProps}) => {
  return (
    <form
      className={classNames(className, `py-10 flex flex-col`)}
      {...otherProps}
    >
      {children}
    </form>
  )
}

export default Form
