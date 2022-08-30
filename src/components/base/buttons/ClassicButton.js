import React from 'react';
import PropTypes from 'prop-types';

const ClassicButton = ({ text, onClick = (f) => f, className }) => {
  return (
    <button onClick={onClick} className={`btn-classic ${className}`}>
      {text}
    </button>
  );
};

//prop-types
ClassicButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
};

//default props
ClassicButton.defaultProps = {
  text: 'Empty',
  onClick: () => console.log('Empty function'),
  className: ''
};

export default ClassicButton;
