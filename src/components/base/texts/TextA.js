import React from 'react';
import PropTypes from 'prop-types';

const TextA = ({ children, color }) => {
  return <p className={'text-a ' + color}>{children}</p>;
};

//proptypes
TextA.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string
};

//default props
TextA.defaultProps = {
  color: 'purple'
};

export default TextA;
