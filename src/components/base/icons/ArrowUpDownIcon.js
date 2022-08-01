import React from 'react';
import PropTypes from 'prop-types';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

const ArrowUpDownIcon = ({ fontSize = 20, className = '' }) => {
  return (
    <BsFillArrowUpCircleFill fontSize={fontSize} className={`arrow-up-down-icon ${className}`} />
  );
};

export default ArrowUpDownIcon;

//prototypes
ArrowUpDownIcon.propTypes = {
  fontSize: PropTypes.number.isRequired,
  className: PropTypes.string
};
