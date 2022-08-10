import React, {FC, ReactNode} from 'react'
import Link from 'next/link'
import classNames from 'classnames'

type RowProps = {
  title?: string
  children: ReactNode
  classname?: string
}

const Row: FC<RowProps> = ({title, classname, children}) => {
  return (
    <div className="flex flex-col gap-4 ">
      {title && (
        <Link href="#">
          <a className="text-3xl lg:text-5xl text-slate-700">{title}</a>
        </Link>
      )}
      <div
        className={classNames(
          'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 ',
          classname,
        )}
      >
        {children}
      </div>
    </div>
  )
}

export default Row
