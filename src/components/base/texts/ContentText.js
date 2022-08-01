import React from 'react';
import PropTypes from 'prop-types';

const ContentText = ({ children, className }) => {
  return <p className={`content-text ${className}`}>{children}</p>;
};

//proptypes
ContentText.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default ContentText;
