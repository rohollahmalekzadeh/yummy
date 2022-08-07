import Image from 'next/image'
import React from 'react'
import BannerLoader from './bannerLoader'

import {motion} from 'framer-motion'
import {container, mainItem} from './framer/banner-framer-motion'

const Banner = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <BannerLoader />

      <motion.div
        className="p-10 h-[550px] md:h-[900px] lg:h-[1000px] md:p-20 flex justify-center  "
        variants={mainItem}
      >
        <Image
          src="/assets/banner.jpg"
          height={1000}
          width={1400}
          priority={true}
          alt="banner"
        />
      </motion.div>
    </motion.div>
  )
}

export default Banner
