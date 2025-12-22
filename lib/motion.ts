/** @format */

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] as const },
  },
};

export const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// export const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: [0.42, 0, 0.58, 1], // cubic-bezier for easeInOut
//     },
//   },
// };
