import {Variants} from 'framer-motion'

export const container = {
  show: {
    transition: {staggerChildren: 0.35},
  },
}

export const item: Variants = {
  hidden: {opacity: 0, y: 200},

  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },

  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: 'easeInOut',
      duration: 0.8,
    },
  },
}

export const mainItem: Variants = {
  hidden: {
    opacity: 0,
    y: '-50%',
    x: '-50%',
    scale: 0.5,
  },

  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
}
