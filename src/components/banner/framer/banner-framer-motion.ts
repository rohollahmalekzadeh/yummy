import {Variants} from 'framer-motion'

export const container = {
  show: {
    transition: {staggerChildren: 0.35},
  },
}

export const item1: Variants = {
  hidden: {opacity: 0, y: 200},

  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },

  exit: {
    opacity: 0,
    y: '100%',
    x: '150%',
    transition: {
      ease: 'easeInOut',
      duration: 0.8,
    },
  },
}

export const item2: Variants = {
  hidden: {opacity: 0, y: 200},

  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },

  exit: {
    opacity: 0,
    y: '100%',
    x: '-150%',
    transition: {
      ease: 'easeInOut',
      duration: 0.8,
    },
  },
}

export const item3: Variants = {
  hidden: {opacity: 0, y: 200},

  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },

  exit: {
    opacity: 0,
    y: '-100%',
    x: '150%',
    transition: {
      ease: 'easeInOut',
      duration: 0.8,
    },
  },
}

export const item4: Variants = {
  hidden: {opacity: 0, y: 200},

  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },

  exit: {
    opacity: 0,
    y: '-100%',
    x: '-150%',
    transition: {
      ease: 'easeInOut',
      duration: 0.8,
    },
  },
}

export const mainItem: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.2,
  },

  show: {
    opacity: 1,
    scale: 1.1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 2.4,
    },
  },
}
