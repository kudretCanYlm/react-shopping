import React from 'react';
import PropTypes from 'prop-types';

const TextB = ({ children, color }) => {
  return <p className={'text-b ' + color}>{children}</p>;
};

TextB.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

TextB.defaultProps = {
  color: 'purple'
};

export default TextB;
