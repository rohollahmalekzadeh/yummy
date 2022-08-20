import {motion} from 'framer-motion'
import {FC} from 'react'

type path = {openPath: string; closedPath: string}

const Path: FC<path> = ({openPath, closedPath, ...rest}) => {
  return (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="hsl(40, 70%,60%)"
      strokeLinecap="round"
      variants={{
        open: {d: openPath, transition: {duration: 0.3}},
        closed: {d: closedPath, transition: {duration: 0.3}},
      }}
      {...rest}
    ></motion.path>
  )
}

export default Path
