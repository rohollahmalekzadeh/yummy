import {Variants} from 'framer-motion'

export const sidebarVariants: Variants = {
  open: {
    clipPath: 'circle(1300px at 40px 40px)',
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
  closed: {
    clipPath: 'circle(23px at 32px 34.5px)',
    transition: {
      duration: 0.6,
      delay: 0.2,
      ease: 'easeOut',
    },
  },
}

export const navbarVariants: Variants = {
  open: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
  closed: {opacity: 0, translateY: -300},
}

export const navigationMobileVariants: Variants = {
  open: {
    display: 'inline-block',
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
      duration: 0.3,
      staggerDirection: 1,
    },
  },
  closed: {
    display: 'none',
    transition: {
      staggerChildren: 0.1,
      delay: 0.6,
      staggerDirection: -1,
      duration: 0.3,
    },
  },
}

export const navigationMobileItemsVariants: Variants = {
  open: {
    y: 170,
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
  closed: {
    y: -500,
    x: -700,
    opacity: 0,
    transition: {
      duration: 0.9,
      staggerChildren: 0.2,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
}
