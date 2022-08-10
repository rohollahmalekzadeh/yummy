import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {MenuToggler, HeaderVertical, HeaderHorizontal, Button} from 'components'

import {motion, useCycle} from 'framer-motion'
import {
  sidebarVariants,
  navbarVariants,
  navigationMobileVariants,
} from '../framer/navbar-framer-motion'

import {useUser} from 'contexts/userProvider'
import {singOutUser} from 'lib/firebase'

const Header = ({menuITems}) => {
  const [isOpen, toggleOpen] = useCycle(false, true)

  const {currentUser} = useUser()

  return (
    <motion.nav
      variants={navbarVariants}
      initial="closed"
      animate="open"
      className="flex justify-between items-center h-16 w-full bg-orange-50 px-5 lg:px-24 fixed z-50"
    >
      {/* Vertical Navbar */}
      <motion.div
        className="lg:hidden z-10"
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
      >
        <motion.div
          className="bg-white absolute -top-1 left-0 h-screen  w-52"
          variants={sidebarVariants}
        />

        <Link href="/">
          <a className="bg-orange-50 absolute ml-14 top-2 hover:bg-orange-50">
            <Image
              src="/assets/logo2.jpg"
              width="42"
              height="42"
              alt="Logo"
              className="rounded-full bg-transparent cursor-pointer"
              quality={100}
            />
          </a>
        </Link>

        <MenuToggler toggle={() => toggleOpen()} />

        <motion.ul className="mt-9" variants={navigationMobileVariants}>
          {menuITems.map((menuITem, idx) => (
            <HeaderVertical key={idx} number={idx}>
              {menuITem}
            </HeaderVertical>
          ))}
        </motion.ul>
      </motion.div>

      {/* Horizontal Navbar */}
      <div className="hidden lg:inline-block mt-1">
        <ul className="flex gap-2">
          <Link href="$">
            <a className="bg-orange-50 mr-2 hover:bg-orange-50">
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
          {menuITems.map((item, idx) => (
            <HeaderHorizontal key={idx}>{item}</HeaderHorizontal>
          ))}
        </ul>
      </div>

      <div className="flex gap-x-3 lg:gap-8 ">
        <div>
          <ul className="flex gap-x-2  lg:gap-2">
            {currentUser ? (
              <Button onClick={singOutUser} className="w-24">
                SingOut
              </Button>
            ) : (
              <>
                <motion.li
                  whileTap={{
                    scale: 0.9,
                    transition: {duration: 0.2},
                  }}
                  whileHover={{
                    scale: 1.1,
                    transition: {duration: 0.2},
                  }}
                >
                  <Link href="/register">
                    <motion.a
                      whileTap={{
                        scale: 0.9,
                        transition: {duration: 0.2},
                      }}
                      whileHover={{
                        scale: 1.1,
                        transition: {duration: 0.2},
                      }}
                    >
                      <Button buttonType="inverted" className="w-24">
                        Register
                      </Button>
                    </motion.a>
                  </Link>
                </motion.li>
                <motion.li
                  whileTap={{
                    scale: 0.9,
                    transition: {duration: 0.2},
                  }}
                  whileHover={{
                    scale: 1.1,
                    transition: {duration: 0.2},
                  }}
                >
                  <Link href="/login">
                    <motion.a>
                      <Button className="w-24">Login</Button>
                    </motion.a>
                  </Link>
                </motion.li>
              </>
            )}
          </ul>
        </div>
      </div>
    </motion.nav>
  )
}

export default Header
