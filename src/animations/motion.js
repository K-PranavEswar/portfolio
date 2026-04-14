export const riseIn = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
}

export const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

export const viewport = {
  once: true,
  amount: 0.2,
}
