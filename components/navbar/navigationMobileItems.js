import React from 'react';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { navigationMobileItemsVariants } from './framer/navbar-framer-motion';

const NavigationMobileItems = ({ children }) => {
  return (
    <motion.li
      className=" flex display-none w-40 justify-center items-center  ml-5 mb-6 space-x-6 cursor-pointer p-1 px-5 rounded-md  text-xl text-orange-500 hover:text-slate-100 hover:bg-orange-400
    border-2 even:border-orange-300 odd:border-amber-300 focus:outline-none hover:border-orange-400 hover:shadow-orange-400 hover:shadow-lg z-20"
      whileTap={{
        scale: 0.9,
        transition: { duration: 0.2 },
      }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
      variants={navigationMobileItemsVariants}
    >
      <Link href={`/${children}`}>
        <a className="  duration-200 transition-all">{children}</a>
      </Link>
    </motion.li>
  );
};

export default NavigationMobileItems;
