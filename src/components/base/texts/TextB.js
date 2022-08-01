import React from 'react';
import PropTypes from 'prop-types';

const TextB = ({ children, color = 'purple' }) => {
  return <p className={'text-b ' + color}>{children}</p>;
};

export default TextB;

TextA.propTypes = {
  children: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired
};
