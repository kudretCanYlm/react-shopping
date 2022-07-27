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
  fadeOutUpBig
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

export { bounces, fades };
