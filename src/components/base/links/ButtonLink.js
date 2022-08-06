import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ButtonLink = ({ children, to, className }) => {
  return (
    <Link className={`button-link ${className}`} to={to}>
      {children}
    </Link>
  );
};

//proptypes
ButtonLink.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  className: PropTypes.string
};

//default props
ButtonLink.defaultProps = {
  to: '',
  className: ''
};

export default ButtonLink;
