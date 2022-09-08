import React, {useState, ReactNode, FC, ComponentType} from 'react'
import {FaCaretDown, FaCaretUp} from 'react-icons/fa'
import classNames from 'classnames'

type DropdownOnClick = {
  IconOpen?: ComponentType
  IconClose?: ComponentType
  title: string
  className?: string
  children: ReactNode
}
const baseStyle =
  'flex flex-col p-1 border-b-2 border-yellow-300 text-2xl cursor-pointer'

const DropdownOnClick: FC<DropdownOnClick> = ({
  IconOpen = FaCaretDown,
  IconClose = FaCaretUp,
  title,
  className,
  children,
}) => {
  const [open, setOpen] = useState(false)

  return (
    <div className={classNames(baseStyle, className)}>
      <span
        onClick={() => setOpen((prev) => !prev)}
        className="pb-1 flex justify-between items-center"
      >
        <span>{title}</span>
        {open ? <IconClose /> : <IconOpen />}
      </span>
      {open && children}
    </div>
  )
}

export default DropdownOnClick
