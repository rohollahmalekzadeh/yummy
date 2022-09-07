import React, {FC, ReactNode} from 'react'

type RowsContainerProps = {
  children: ReactNode
}
const RowsContainer: FC<RowsContainerProps> = ({children}) => {
  return (
    <div className="flex flex-col justify-center items-center mb-20 mt-6 gap-20">
      {children}
    </div>
  )
}

export default RowsContainer
