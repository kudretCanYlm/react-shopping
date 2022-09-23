import React from 'react';
import PropTypes from 'prop-types';
import { EMPTY_ICON } from './common/common-props';

const BlankBorderIconLink = ({ children, href, className }) => {
  return (
    <div className={`blank-border-icon-link flex-row ${className}`}>
      <a href={'https://' + href} target="blank" className="flex-row">
        {children}
      </a>
    </div>
  );
};

//prop-types
BlankBorderIconLink.propTypes = {
  children: PropTypes.object.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};

//default props
BlankBorderIconLink.defaultProps = {
  children: EMPTY_ICON,
  href: '',
  className: ''
};

export default BlankBorderIconLink;
