import React, {FC, ReactElement} from 'react'
import Link from 'next/link'

import {motion} from 'framer-motion'
import {navigationMobileItemsVariants} from '../framer/navbar-framer-motion'
import Button from 'src/components/ui/button'

type HeaderVerticalProps = {
  children: string
}

const HeaderVertical: FC<HeaderVerticalProps> = ({children}) => {
  return (
    <motion.li
      className="mb-6 border-2 even:border-orange-300 odd:border-amber-300 rounded-lg hover:border-transparent"
      variants={navigationMobileItemsVariants}
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
        <Button buttonType="inverted" className="w-24 text-sm">
          {children}
        </Button>
      </Link>
    </motion.li>
  )
}

export default HeaderVertical
