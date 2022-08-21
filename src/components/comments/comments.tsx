import React, {FC} from 'react'
import {SingleStar} from 'src/components'

type CommentsProps = {
  name: string
  date: string
  description: string
}

const Comments: FC<CommentsProps> = ({date, description, name}) => {
  return (
    <div className="flex justify-between border-b-2 border-white px-8 py-4">
      <div className="flex flex-col gap-1 flex-shrink-0 w-28">
        <p className="inline-block  overflow-ellipsis overflow-hidden font-bold ">
          {name}
        </p>
        <p className="overflow-ellipsis overflow-hidden">{date}</p>
        <SingleStar />
      </div>
      <p className="ml-10">{description}</p>
    </div>
  )
}

export default Comments
