import React from 'react';
import PropTypes from 'prop-types';

const TextA = ({ children, color = 'purple' }) => {
  return <p className={'text-a ' + color}>{children}</p>;
};

export default TextA;

TextA.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string
};
