import Image from 'next/image';
import React from 'react';
import BannerLoader from './bannerLoader';

import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { container, mainItem } from './framer/banner-framer-motion';

const Banner = () => {
  const [loading, setLoading] = React.useState(true);
  return (
    <AnimateSharedLayout>
      <AnimatePresence>
        <motion.div
          className="relative h-screen "
          variants={container}
          initial="hidden"
          animate="show"
        >
          {loading ? (
            <motion.div key="loader">
              <BannerLoader setLoading={setLoading} />
            </motion.div>
          ) : (
            <motion.div
              className="absolute top-1/3 left-1/2"
              variants={mainItem}
            >
              <Image
                src="/assets/banner.jpg"
                height={2000}
                width={2000}
                priority={true}
                alt="banner"
                className=" bg-no-repeat bg-cover rounded-md"
              />
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};

export default Banner;
