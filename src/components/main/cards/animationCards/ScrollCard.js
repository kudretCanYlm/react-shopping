import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { EMPTY_ICON } from 'components/base/links/common/common-props';

const ScrollCard = ({ children, hueA, hueB, className }) => {
  const hue = (h) => `hsl(${h}, 100%, 50%)`;

  const cardVariants = {
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className={`flex-row scroll-card ${className}`}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.8 }}
    >
      <div className="splash" style={{ background }} />
      <motion.div className="card flex-row" variants={cardVariants}>
        {children}
      </motion.div>
    </motion.div>
  );
};

ScrollCard.propTypes = {
  children: PropTypes.object.isRequired,
  hueA: PropTypes.number.isRequired,
  hueB: PropTypes.number.isRequired,
  className: PropTypes.string
};

ScrollCard.defaultProps = {
  children: EMPTY_ICON,
  hueA: 290,
  hueB: 320,
  className: ''
};

export default ScrollCard;
