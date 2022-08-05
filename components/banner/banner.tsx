import Image from 'next/image'
import React from 'react'
import BannerLoader from './bannerLoader'

import {motion} from 'framer-motion'
import {container, mainItem} from './framer/banner-framer-motion'

const Banner = () => {
  const [loading, setLoading] = React.useState(true)

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <BannerLoader loading={loading} setLoading={setLoading} />

      <motion.div
        className="p-10 md:p-20 flex justify-center  "
        variants={mainItem}
      >
        <Image
          src="/assets/banner.jpg"
          height={1000}
          width={1600}
          priority={true}
          alt="banner"
        />
      </motion.div>
    </motion.div>
  )
}

export default Banner
