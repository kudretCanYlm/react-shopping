import React from 'react';
import PropTypes from 'prop-types';

const TextA = ({ children, color, className }) => {
  return <p className={`text-a ${color} ${className}`}>{children}</p>;
};

//proptypes
TextA.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  className: PropTypes.string
};

//default props
TextA.defaultProps = {
  color: 'purple',
  className: ''
};

export default TextA;
