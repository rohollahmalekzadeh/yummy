import React from 'react';
import {
  MenuToggler,
  NavigationMobileContainer,
  NavigationMobileItems,
  NavigationPcItems,
  Button,
} from '../index';

import Image from 'next/image';
import Link from 'next/link';

import { motion, useCycle } from 'framer-motion';
import {
  sidebarVariants,
  navbarVariants,
  navigationMobileVariants,
} from './framer/navbar-framer-motion';

const Navbar = ({ menuITems }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav
      variants={navbarVariants}
      initial="closed"
      animate="open"
      className="flex justify-between items-center h-16 w-full bg-orange-50 px-5 lg:px-24 fixed z-20 "
    >
      {/* Mobile Navbar */}
      <motion.div
        className="lg:hidden z-10  "
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
      >
        <motion.div
          className="bg-white absolute top-0 left-0 h-screen  w-64   "
          variants={sidebarVariants}
        />

        <MenuToggler toggle={() => toggleOpen()} />

        <motion.ul className="mt-9" variants={navigationMobileVariants}>
          {menuITems.map((menuITem, idx) => (
            <NavigationMobileItems key={idx} number={idx}>
              {menuITem}
            </NavigationMobileItems>
          ))}
        </motion.ul>
      </motion.div>

      {/* PC Navbar */}
      <div className="hidden lg:inline-block lg:mb-2 ">
        <ul className="flex gap-2">
          {menuITems.map((item, idx) => (
            <NavigationPcItems key={idx}>{item}</NavigationPcItems>
          ))}
        </ul>
      </div>

      <div className="flex gap-x-3 lg:gap-8 ">
        <Link href="/">
          <a className="bg-orange-50 hover:bg-orange-50">
            <Image
              src="/assets/logo2.jpg"
              width="40"
              height="40"
              alt="Logo"
              className="rounded-full cursor-pointer bg-black"
              quality={100}
            />
          </a>
        </Link>

        <div>
          <ul className="flex gap-x-2  lg:gap-2">
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
              <Link href="/register">
                <motion.a
                  whileTap={{
                    scale: 0.9,
                    transition: { duration: 0.2 },
                  }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 },
                  }}
                >
                  <Button buttonType="inverted" className="w-24 ">
                    Register
                  </Button>
                </motion.a>
              </Link>
            </motion.li>

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
              <Link href="/login">
                <motion.a>
                  <Button className="w-24">Login</Button>
                </motion.a>
              </Link>
            </motion.li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
