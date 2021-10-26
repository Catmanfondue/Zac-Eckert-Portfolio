const getStagger = (staggerAmount: number) => {
  const stagger = {
    animate: {
      transition: {
        staggerChildren: staggerAmount,
      },
    },
  };

  return stagger;
};

export { getStagger };
