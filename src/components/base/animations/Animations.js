import {
  bounce,
  bounceIn,
  bounceInDown,
  bounceInLeft,
  bounceInRight,
  bounceInUp,
  bounceOutDown,
  bounceOutLeft,
  bounceOutRight,
  bounceOutUp,
  fadeIn,
  fadeInDown,
  fadeInDownBig,
  fadeInLeft,
  fadeInLeftBig,
  fadeInRight,
  fadeInRightBig,
  fadeInUp,
  fadeInUpBig,
  fadeOut,
  fadeOutDown,
  fadeOutDownBig,
  fadeOutLeft,
  fadeOutLeftBig,
  fadeOutRight,
  fadeOutRightBig,
  fadeOutUp,
  fadeOutUpBig,
  flip,
  flipInX,
  flipInY,
  flipOutX,
  flipOutY,
  headShake,
  hinge,
  jello,
  lightSpeedIn,
  lightSpeedOut,
  pulse,
  rollIn,
  rollOut,
  rotateIn,
  rotateInDownLeft,
  rotateInDownRight,
  rotateInUpLeft,
  rotateInUpRight,
  rotateOut,
  rotateOutDownLeft,
  rotateOutDownRight,
  rotateOutUpLeft,
  rotateOutUpRight,
  rubberBand,
  shake,
  slideInDown,
  slideInLeft,
  slideInRight,
  slideInUp,
  slideOutDown,
  slideOutLeft,
  slideOutRight,
  slideOutUp,
  swing,
  tada,
  wobble,
  zoomIn,
  zoomInDown,
  zoomInLeft,
  zoomInRight,
  zoomInUp,
  zoomOut,
  zoomOutDown,
  zoomOutLeft,
  zoomOutRight,
  zoomOutUp
} from 'react-animations';
import Radium from 'radium';

const bounces = {
  bounce: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounce, 'bounce')
  },
  bounceIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounceIn, 'bounceIn')
  },
  bounceInDown: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounceInDown, 'bounceInDown')
  },
  bounceInLeft: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounceInLeft, 'bounceInLeft')
  },
  bounceInRight: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounceInRight, 'bounceInRight')
  },
  bounceInUp: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounceInUp, 'bounceInUp')
  },
  bounceOutDown: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounceOutDown, 'bounceOutDown')
  },
  bounceOutLeft: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounceOutLeft, 'bounceOutLeft')
  },
  bounceOutRight: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounceOutRight, 'bounceOutRight')
  },
  bounceOutUp: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounceOutUp, 'bounceOutUp')
  }
};

const fades = {
  fadeIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  },
  fadeInDown: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
  },
  fadeInDownBig: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeInDownBig, 'fadeInDownBig')
  },
  fadeInLeft: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
  },
  fadeInLeftBig: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeInLeftBig, 'fadeInLeftBig')
  },
  fadeInRight: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeInRight, 'fadeInRight')
  },
  fadeInRightBig: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeInRightBig, 'fadeInRightBig')
  },
  fadeInUp: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
  },
  fadeInUpBig: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeInUpBig, 'fadeInUpBig')
  },
  fadeOut: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeOut, 'fadeOut')
  },
  fadeOutDown: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeOutDown, 'fadeOutDown')
  },
  fadeOutDownBig: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeOutDownBig, 'fadeOutDownBig')
  },
  fadeOutLeft: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeOutLeft, 'fadeOutLeft')
  },
  fadeOutLeftBig: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeOutLeftBig, 'fadeOutLeftBig')
  },
  fadeOutRight: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeOutRight, 'fadeOutRight')
  },
  fadeOutRightBig: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeOutRightBig, 'fadeOutRightBig')
  },
  fadeOutUp: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeOutUp, 'fadeOutUp')
  },
  fadeOutUpBig: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeOutUpBig, 'fadeOutUpBig')
  }
};

const flips = {
  flip: {
    animation: 'x 1s',
    animationName: Radium.keyframes(flip, 'flip')
  },
  flipInX: {
    animation: 'x 1s',
    animationName: Radium.keyframes(flipInX, 'flipInX')
  },
  flipInY: {
    animation: 'x 1s',
    animationName: Radium.keyframes(flipInY, 'flipInY')
  },
  flipOutX: {
    animation: 'x 1s',
    animationName: Radium.keyframes(flipOutX, 'flipOutX')
  },
  flipOutY: {
    animation: 'x 1s',
    animationName: Radium.keyframes(flipOutY, 'flipOutY')
  }
};

const headShakes = {
  headShake: {
    animation: 'x 1s',
    animationName: Radium.keyframes(headShake, 'headShake')
  }
};

const hinges = {
  hinge: {
    animation: 'x 1s',
    animationName: Radium.keyframes(hinge, 'hinge')
  }
};

const jellos = {
  jello: {
    animation: 'x 1s',
    animationName: Radium.keyframes(jello, 'jello')
  }
};

const lightSpeeds = {
  lightSpeedIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(lightSpeedIn, 'lightSpeedIn')
  },
  lightSpeedOut: {
    animation: 'x 1s',
    animationName: Radium.keyframes(lightSpeedOut, 'lightSpeedOut')
  }
};

const pulses = {
  pulse: {
    animation: 'x 1s',
    animationName: Radium.keyframes(pulse, 'pulse')
  }
};

const rolls = {
  rollIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(rollIn, 'rollIn')
  },
  rollOut: {
    animation: 'x 1s',
    animationName: Radium.keyframes(rollOut, 'rollOut')
  }
};

const rotates = {
  rotateIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(rotateIn, 'rotateIn')
  },
  rotateInDownLeft: {
    animation: 'x 1s',
    animationName: Radium.keyframes(rotateInDownLeft, 'rotateInDownLeft')
  },
  rotateInDownRight: {
    animation: 'x 1s',
    animationName: Radium.keyframes(rotateInDownRight, 'rotateInDownRight')
  },
  rotateInUpLeft: {
    animation: 'x 1s',
    animationName: Radium.keyframes(rotateInUpLeft, 'rotateInUpLeft')
  },
  rotateInUpRight: {
    animation: 'x 1s',
    animationName: Radium.keyframes(rotateInUpRight, 'rotateInUpRight')
  },
  rotateOut: {
    animation: 'x 1s',
    animationName: Radium.keyframes(rotateOut, 'rotateOut')
  },
  rotateOutDownLeft: {
    animation: 'x 1s',
    animationName: Radium.keyframes(rotateOutDownLeft, 'rotateOutDownLeft')
  },
  rotateOutDownRight: {
    animation: 'x 1s',
    animationName: Radium.keyframes(rotateOutDownRight, 'rotateOutDownRight')
  },
  rotateOutUpLeft: {
    animation: 'x 1s',
    animationName: Radium.keyframes(rotateOutUpLeft, 'rotateOutUpLeft')
  },
  rotateOutUpRight: {
    animation: 'x 1s',
    animationName: Radium.keyframes(rotateOutUpRight, 'rotateOutUpRight')
  }
};

const rubberBands = {
  rubberBand: {
    animation: 'x 1s',
    animationName: Radium.keyframes(rubberBand, 'rubberBand')
  }
};

const shakes = {
  shake: {
    animation: 'x 1s',
    animationName: Radium.keyframes(shake, 'shake')
  }
};

const slides = {
  slideInDown: {
    animation: 'x 1s',
    animationName: Radium.keyframes(slideInDown, 'slideInDown')
  },
  slideInLeft: {
    animation: 'x 1s',
    animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
  },
  slideInRight: {
    animation: 'x 1s',
    animationName: Radium.keyframes(slideInRight, 'slideInRight')
  },
  slideInUp: {
    animation: 'x 1s',
    animationName: Radium.keyframes(slideInUp, 'slideInUp')
  },
  slideOutDown: {
    animation: 'x 1s',
    animationName: Radium.keyframes(slideOutDown, 'slideOutDown')
  },
  slideOutLeft: {
    animation: 'x 1s',
    animationName: Radium.keyframes(slideOutLeft, 'slideOutLeft')
  },
  slideOutRight: {
    animation: 'x 1s',
    animationName: Radium.keyframes(slideOutRight, 'slideOutRight')
  },
  slideOutUp: {
    animation: 'x 1s',
    animationName: Radium.keyframes(slideOutUp, 'slideOutUp')
  }
};

const swings = {
  swing: {
    animation: 'x 1s',
    animationName: Radium.keyframes(swing, 'swing')
  }
};

const tadas = {
  tada: {
    animation: 'x 1s',
    animationName: Radium.keyframes(tada, 'tada')
  }
};

const wobbles = {
  wobble: {
    animation: 'x 1s',
    animationName: Radium.keyframes(wobble, 'wobble')
  }
};

const zooms = {
  zoomIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(zoomIn, 'zoomIn')
  },
  zoomInDown: {
    animation: 'x 1s',
    animationName: Radium.keyframes(zoomInDown, 'zoomInDown')
  },
  zoomInLeft: {
    animation: 'x 1s',
    animationName: Radium.keyframes(zoomInLeft, 'zoomInLeft')
  },
  zoomInRight: {
    animation: 'x 1s',
    animationName: Radium.keyframes(zoomInRight, 'zoomInRight')
  },
  zoomInUp: {
    animation: 'x 1s',
    animationName: Radium.keyframes(zoomInUp, 'zoomInUp')
  },
  zoomOut: {
    animation: 'x 1s',
    animationName: Radium.keyframes(zoomOut, 'zoomOut')
  },
  zoomOutDown: {
    animation: 'x 1s',
    animationName: Radium.keyframes(zoomOutDown, 'zoomOutDown')
  },
  zoomOutLeft: {
    animation: 'x 1s',
    animationName: Radium.keyframes(zoomOutLeft, 'zoomOutLeft')
  },
  zoomOutRight: {
    animation: 'x 1s',
    animationName: Radium.keyframes(zoomOutRight, 'zoomOutRight')
  },
  zoomOutUp: {
    animation: 'x 1s',
    animationName: Radium.keyframes(zoomOutUp, 'zoomOutUp')
  }
};

export {
  bounces,
  fades,
  flips,
  headShakes,
  hinges,
  jellos,
  lightSpeeds,
  pulses,
  rolls,
  rotates,
  rubberBands,
  shakes,
  slides,
  swings,
  tadas,
  wobbles,
  zooms
};
