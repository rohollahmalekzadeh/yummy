import React, {FC} from 'react'
import Link from 'next/link'

import Button from 'src/components/ui/button'
import {motion} from 'framer-motion'

type HeaderVertical = {
  children: string
}

const HeaderHorizontal: FC<HeaderVertical> = ({children}) => {
  return (
    <motion.li
      whileTap={{
        scale: 0.9,
        transition: {duration: 0.2},
      }}
      whileHover={{
        scale: 1.1,
        transition: {duration: 0.2},
      }}
    >
      <Link href={`/${children}`}>
        <motion.a>
          <Button buttonType="inverted" className="md:text-base md:w-20">
            {children}
          </Button>
        </motion.a>
      </Link>
    </motion.li>
  )
}

export default HeaderHorizontal
