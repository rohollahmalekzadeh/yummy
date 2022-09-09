import React, {useState, ReactNode, FC, ComponentType} from 'react'
import {FaCaretDown, FaCaretUp} from 'react-icons/fa'
import classNames from 'classnames'

type DropdownsProps = {
  IconOpen?: ComponentType
  IconClose?: ComponentType
  title: string
  className?: string
  children: ReactNode
  onClickShow?: boolean
  onHoverShow?: boolean
}
const baseStyle = ' cursor-pointer'

const Dropdowns: FC<DropdownsProps> = ({
  IconOpen = FaCaretDown,
  IconClose = FaCaretUp,
  title,
  className,
  children,
  onClickShow = false,
  onHoverShow = false,
}) => {
  const [open, setOpen] = useState(false)

  return (
    <div className={classNames(baseStyle, className)}>
      <span
        onClick={() => onClickShow && setOpen((prev) => !prev)}
        onMouseEnter={() => onHoverShow && setOpen(true)}
        onMouseLeave={() => onHoverShow && setOpen(false)}
        className="pb-1 flex justify-between items-center"
      >
        <span>{title}</span>
        {open ? <IconClose /> : <IconOpen />}
      </span>
      {open && children}
    </div>
  )
}

export default Dropdowns
