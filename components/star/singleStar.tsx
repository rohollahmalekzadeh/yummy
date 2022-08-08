import React, {FC} from 'react'
import {BsStar, BsStarHalf, BsStarFill} from 'react-icons/bs'

type SingleStarProps = {
  label?: string
}

const SingleStar: FC<SingleStarProps> = ({label}) => {
  const score = 0
  return (
    <span className="flex items-center gap-1 ml-1">
      {score > 4 ? (
        <BsStarFill className="my-auto mr-1 text-2xl fill-yellow-400 z-10" />
      ) : score > 2 ? (
        <BsStarHalf className="my-auto mr-1 text-2xl fill-yellow-400 z-10" />
      ) : (
        <BsStar className="my-auto mr-1 text-2xl fill-yellow-400 z-10" />
      )}
      {score}
    </span>
  )
}

export default SingleStar
