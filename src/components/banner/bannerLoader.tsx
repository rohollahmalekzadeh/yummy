import Image from 'next/image'

import {motion, AnimatePresence} from 'framer-motion'
import {
  container,
  item1,
  item2,
  item3,
  item4,
} from './framer/banner-framer-motion'
import React, {FC} from 'react'

type BannerLoaderProps = {
  setMountImage: React.Dispatch<React.SetStateAction<boolean>>
}
const BannerLoader: FC<BannerLoaderProps> = ({setMountImage}) => {
  const [loading, setLoading] = React.useState(true)

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="relative h-screen overflow-hidden"
          variants={container}
          onAnimationComplete={() => {
            setLoading(false)
            setMountImage(true)
          }}
          initial="hidden"
          animate="show"
          exit="exit"
          key="123unique123"
        >
          <motion.div variants={item1} className="absolute top-[1%] left-[7%] ">
            <Image
              src="/assets/pizza.webp"
              height={300}
              width={170}
              alt="pizza"
              className="rounded-md"
            />
          </motion.div>

          <motion.div variants={item2} className="absolute top-[3%] right-[9%]">
            <Image
              src="/assets/juice.webp"
              height={300}
              width={170}
              alt="juice"
              className="rounded-md"
            />
          </motion.div>

          <motion.div
            variants={item3}
            className="absolute bottom-[13%] left-[9%]"
          >
            <Image
              src="/assets/pasta.webp"
              height={300}
              width={170}
              alt="pasta"
              className="rounded-md"
            />
          </motion.div>

          <motion.div
            variants={item4}
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
      )}
    </AnimatePresence>
  )
}

export default BannerLoader
