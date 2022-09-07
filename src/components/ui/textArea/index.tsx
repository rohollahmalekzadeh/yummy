import React, {FC, TextareaHTMLAttributes} from 'react'
import classNames from 'classnames'

type TextAreaProps = {
  className?: string
} & TextareaHTMLAttributes<HTMLTextAreaElement>
const baseStyle =
  'w-full h-40 overflow-auto resize-none p-3 focus:none rounded-lg focus:outline-orange-400 focus:outline-double focus:shadow-lg focus:shadow-orange-300 '

const TextArea: FC<TextAreaProps> = ({...otherProps}) => {
  return (
    <textarea className={classNames(baseStyle, classNames)} {...otherProps} />
  )
}

export default TextArea
