import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { EMPTY_ICON } from './common/common-props';

const IconLink = ({ children, text, to, className }) => {
  return (
    <div className={`link-base ${className}`}>
      <Link className="link link-icon flex-row" to={to}>
        <div className="icon">{children}</div>
        <h2>{text}</h2>
      </Link>
    </div>
  );
};

//proptypes
IconLink.propTypes = {
  children: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  className: PropTypes.string
};

//default props
IconLink.defaultProps = {
  children: EMPTY_ICON,
  text: 'Empty',
  to: '/',
  className: ''
};

export default IconLink;
