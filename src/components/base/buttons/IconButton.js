import React from 'react';
import PropTypes from 'prop-types';
import { EMPTY_ICON } from '../links/common/common-props';

const IconButton = ({ children, text, onClick = (f) => f, className = '' }) => {
  return (
    <div className={`btn-icon flex-row ${className}`} onClick={onClick}>
      {children}
      {text.length > 0 ? <p className="fontsize-dashboard white">{text}</p> : ''}
    </div>
  );
};

//prop-types
IconButton.propTypes = {
  children: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

//default props
IconButton.defaultProps = {
  children: EMPTY_ICON,
  text: 'Empty',
  className: '',
  onClick: () => console.log('Emty function')
};

export default IconButton;
