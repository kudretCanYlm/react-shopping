import React from 'react';
import PropTypes from 'prop-types';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

const ArrowUpDownIcon = ({ fontSize, className }) => {
  return (
    <BsFillArrowUpCircleFill fontSize={fontSize} className={`arrow-up-down-icon ${className}`} />
  );
};

//prototypes
ArrowUpDownIcon.propTypes = {
  fontSize: PropTypes.number.isRequired,
  className: PropTypes.string
};

//default props
ArrowUpDownIcon.defaultProps = {
  fontSize: 20,
  className: ''
};

export default ArrowUpDownIcon;
