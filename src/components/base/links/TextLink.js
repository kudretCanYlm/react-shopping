import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TextLink = ({ children, to, className }) => {
  return (
    <Link className={`link-text ${className}`} to={to}>
      {children}
    </Link>
  );
};

//proptypes
TextLink.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  className: PropTypes.string
};

//default props
TextLink.defaultProps = {
  children: 'empty',
  to: '/',
  className: ''
};

export default TextLink;
