import React, {FC} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {motion, Variants} from 'framer-motion'
import {buttonBase} from 'components/button/button'
import {BsArrowLeft} from 'react-icons/bs'

const onHover: Variants = {
  hover: {
    translateX: -6,
    transition: {
      yoyo: Infinity,
      duration: 0.3,
    },
  },
}

const CategoryPoster: FC<any> = ({...item}) => {
  const {name, image} = item
  return (
    <motion.div
      key={name}
      className="relative h-[180px] hover:shadow-xl hover:shadow-amber-800 "
      whileHover={{
        translateY: -5,
        scale: 1.02,
        transition: {
          duration: 0.3,
        },
      }}
    >
      <Image
        src={image}
        height={180}
        width={220}
        alt="Category"
        className="rounded-t-md"
      />
      <Link href="#">
        <motion.a
          whileHover="hover"
          className={`${buttonBase} w-28 rounded-lg text-base absolute z-10 bottom-2 right-1`}
        >
          <motion.span className="flex justify-center items-center text-lg gap-1">
            <motion.span variants={onHover}>
              <BsArrowLeft />
            </motion.span>
            {name}
          </motion.span>
        </motion.a>
      </Link>
    </motion.div>
  )
}

export default CategoryPoster
