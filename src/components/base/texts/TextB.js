import React from 'react';
import PropTypes from 'prop-types';

const TextB = ({ children, color, className }) => {
  return <p className={`text-b ${color} ${className}`}>{children}</p>;
};

TextB.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  className: PropTypes.string
};

TextB.defaultProps = {
  color: 'purple',
  className: ''
};

export default TextB;
