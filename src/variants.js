export const fadeIn = (direction, delay) => {
  let x = 0, y = 0;

  switch (direction) {
    case 'up':
      y = 40;
      break;
    case 'down':
      y = -40;
      break;
    case 'left':
      x = 40;
      break;
    case 'right':
      x = -40;
      break;
    default:
      break;
  }

  return {
    hidden: {
      opacity: 0,
      x: x,
      y: y,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: 'tween',
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      }
    }
  };
};
