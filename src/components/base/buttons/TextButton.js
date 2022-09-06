import React from 'react';
import PropTypes from 'prop-types';

const TextButton = ({ text, onClick = (f) => f, className }) => {
  return (
    <button className={`btn-text ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

//prop-types
TextButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
};

//default props
TextButton.defaultProps = {
  text: 'Empty Text',
  onClick: () => console.log('Empty Function'),
  className: ''
};

export default TextButton;
