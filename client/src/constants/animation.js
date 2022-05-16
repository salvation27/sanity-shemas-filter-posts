export const titleAnimation = {
  whileInView: {
    y: [20, 0],
    // scale:[0,1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export const emodziAnimation = {
  whileInView: {
    scale: [0, 1],
    // opacity: [0.3, 1],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const aboutNumHover = {
  whileHover: {
    scale: 1.1,
    // y: [0, -10],
    border: "1px solid green",
    cursor: "pointer",
    transition: {
      duration: 0.2,
    },
  },
};
