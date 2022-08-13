import React from 'react';
import PropTypes from 'prop-types';
import { EMPTY_ICON } from 'components/base/links/common/common-props';

const BorderIcon = ({ children, onClick = (f) => f, className }) => {
  return (
    <div onClick={onClick} className={`border-icon flex-row ${className}`}>
      {children}
    </div>
  );
};

//prop-type
BorderIcon.propTypes = {
  children: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
};

//default props
BorderIcon.defaultProps = {
  children: EMPTY_ICON,
  className: ''
};

export default BorderIcon;
