import React, {ReactNode, FC} from 'react'
import classNames from 'classnames'

type StickyLayoutProps = {className?: string; children: ReactNode}
const baseStyle = 'h-full sticky bg-white top-44 w-72  p-5 pb-2 rounded-md'

const StickyLayout: FC<StickyLayoutProps> = ({className, children}) => {
  return <div className={classNames(baseStyle, className)}>{children}</div>
}

export default StickyLayout
