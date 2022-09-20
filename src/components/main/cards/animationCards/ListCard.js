import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import ThinMidTitle from 'components/base/headers/ThinMidTitle';

const ListCard = ({ text, className }) => {
  const cardVariants = {
    offhover: {
      borderRadius: 0
    },
    onhover: {
      borderRadius: '50%',
      transition: {
        type: 'spring',
        bounce: 0.7,
        duration: 0.3
      }
    }
  };

  return (
    <motion.div whileHover="onhover" className={`list-card flex-row ${className}`}>
      <motion.div variants={cardVariants} className="shape"></motion.div>
      <ThinMidTitle className="title-color-3 icon-margin-4 center-text">{text}</ThinMidTitle>
    </motion.div>
  );
};

//prop-types
ListCard.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string
};

//default props
ListCard.defaultProps = {
  text: 'Empty Text',
  className: ''
};

export default ListCard;
