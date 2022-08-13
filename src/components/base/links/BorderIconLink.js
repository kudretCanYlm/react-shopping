import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { EMPTY_ICON } from './common/common-props';

const BorderIconLink = ({ children, to, className }) => {
  return (
    <div className={`border-icon-link flex-row link-base ${className}`}>
      <Link className="link" to={to}>
        {children}
      </Link>
    </div>
  );
};

BorderIconLink.propTypes = {
  children: PropTypes.object.isRequired,
  to: PropTypes.string.isRequired,
  className: PropTypes.string
};

BorderIconLink.defaultProps = {
  children: EMPTY_ICON,
  to: '/',
  className: ''
};

export default BorderIconLink;
