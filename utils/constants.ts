export const ContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};
export const ItemsVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 50,
      duration: 0.9,
    },
  },
};

export const ButtonVariants = {
  scale: 1.25,
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 10,
  },
};

export const ListVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
  transition: {
    type: "spring",
    damping: 20,
    stiffness: 100,
  },
};
