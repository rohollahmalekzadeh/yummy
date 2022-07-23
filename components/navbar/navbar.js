import React from 'react';
import {
  MenuToggler,
  NavigationMobileContainer,
  NavigationMobileItems,
  NavigationPcItems,
} from '../index';

import Image from 'next/image';
import Link from 'next/link';

import { motion, useCycle } from 'framer-motion';
import {
  sidebarVariants,
  navbarVariants,
  navigationMobileVariants,
} from './framer/navbar-framer-motion';

const menuITems = ['Home', 'Menu', 'Blog', 'About us'];

const Navbar = () => {
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
              className="rounded-full cursor-pointer bg-black  "
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
                  className="cursor-pointer   text-2xl text-orange-500 hover:text-slate-100 hover:bg-orange-500  p-1 px-3 rounded-md  focus:text-slate-100 focus:bg-orange-400 transition duration-300 focus:outline-none hover:shadow-orange-400 hover:shadow-lg "
                >
                  Register
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
                <motion.a className="cursor-pointer   text-2xl bg-orange-500 text-slate-100  hover:text-orange-500 hover:bg-orange-100  p-1 px-3 rounded-md  focus:text-slate-100 focus:bg-orange-400 transition duration-300 focus:outline-none hover:shadow-orange-400 hover:shadow-lg ">
                  Login
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
