import React from 'react';
import Link from 'next/link';

import { Button } from '../';
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
        <motion.a>
          <Button buttonType="inverted" className="text-lg w-24">
            {children}
          </Button>
        </motion.a>
      </Link>
    </motion.li>
  );
};

export default NavigationPcItems;
