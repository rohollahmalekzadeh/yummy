import React from 'react';
import Link from 'next/link';

import { motion } from 'framer-motion';

const NavigationPcItems = ({ children }) => {
  return (
    <motion.li
      whileTap={{
        scale: 0.9,
        transition: { duration: 0.2 },
      }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
    >
      <Link href={`/${children}`}>
        <motion.a className="cursor-pointer  text-xl text-orange-400 hover:text-slate-100 hover:bg-orange-400  p-1 px-3 rounded-md  focus:text-slate-100 focus:bg-orange-400 transition duration-300 focus:outline-none hover:shadow-orange-300 hover:shadow-lg ">
          {children}
        </motion.a>
      </Link>
    </motion.li>
  );
};

export default NavigationPcItems;
