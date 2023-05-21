import React from 'react';
import PropTypes from 'prop-types';

const ClassicButton = ({ text, onClick = (f) => f, isSubmit, className }) => {
  return (
    <button
      type={isSubmit === true ? 'submit' : 'button'}
      onClick={onClick}
      className={`btn-classic ${className}`}>
      {text}
    </button>
  );
};

//prop-types
ClassicButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isSubmit: PropTypes.bool,
  className: PropTypes.string
};

//default props
ClassicButton.defaultProps = {
  text: 'Empty',
  onClick: () => console.log('Empty function'),
  isSubmit: false,
  className: ''
};

export default ClassicButton;
