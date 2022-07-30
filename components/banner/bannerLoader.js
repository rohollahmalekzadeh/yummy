import Image from 'next/image';

import { motion } from 'framer-motion';
import { container, item } from './framer/banner-framer-motion';
import React from 'react';

const BannerLoader = ({ setLoading }) => {
  React.useEffect(() => {
    console.log('did mount');

    return () => console.log('did unmount');
  });

  return (
    <motion.div
      className="relative h-screen overflow-hidden"
      variants={container}
      onAnimationComplete={() => setLoading(false)}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div variants={item} className="absolute top-[1%] left-[7%] ">
        <Image
          src="/assets/pizza.webp"
          height={300}
          width={170}
          alt="pizza"
          layout="fixed"
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
      <motion.div variants={item} className="absolute bottom-[10%] right-[7%]">
        <Image
          src="/assets/salad.webp"
          height={300}
          width={170}
          alt="salad"
          className="rounded-md"
        />
      </motion.div>
    </motion.div>
  );
};

export default BannerLoader;
