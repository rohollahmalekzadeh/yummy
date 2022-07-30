import Image from 'next/image'

import {motion, AnimatePresence} from 'framer-motion'
import {container, item} from './framer/banner-framer-motion'
import React, {FC, SetStateAction} from 'react'

type BannerLoaderProps = {
  setLoading: React.Dispatch<SetStateAction<boolean>>
}
const BannerLoader: FC<BannerLoaderProps> = ({setLoading}) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className="relative h-screen overflow-hidden"
        variants={container}
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
        exit="exit"
        key="123unique123"
      >
        <motion.div variants={item} className="absolute top-[1%] left-[7%] ">
          <Image
            src="/assets/pizza.webp"
            height={300}
            width={170}
            alt="pizza"
            className="rounded-md"
          />
        </motion.div>

        <motion.div variants={item} className="absolute top-[3%] right-[9%]">
          <Image
            src="/assets/juice.webp"
            height={300}
            width={170}
            alt="juice"
            className="rounded-md"
          />
        </motion.div>

        <motion.div variants={item} className="absolute bottom-[13%] left-[9%]">
          <Image
            src="/assets/pasta.webp"
            height={300}
            width={170}
            alt="pasta"
            className="rounded-md"
          />
        </motion.div>

        <motion.div
          variants={item}
          className="absolute bottom-[10%] right-[7%]"
        >
          <Image
            src="/assets/salad.webp"
            height={300}
            width={170}
            alt="salad"
            className="rounded-md"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default BannerLoader
