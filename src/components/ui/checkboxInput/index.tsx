import React, {InputHTMLAttributes, FC} from 'react'
import classNames from 'classnames'

type CheckboxInputProps = {
  label: string
  className?: string
} & InputHTMLAttributes<HTMLInputElement>

const baseClass = 'cursor-pointer'

const CheckboxInput: FC<CheckboxInputProps> = ({
  label,
  className,
  ...otherProps
}) => {
  return (
    <label className="flex gap-2 cursor-pointer  ">
      <input
        type="checkbox"
        className={classNames(baseClass, className)}
        {...otherProps}
      />
      <span>{label}</span>
    </label>
  )
}

export default CheckboxInput
