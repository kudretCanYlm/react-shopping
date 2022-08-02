import React from 'react';
import PropTypes from 'prop-types';
import { useRef } from 'react';

const ButtonTextBox = ({ placeHolder, buttonText, className, onClickBtn = (f) => f }) => {
  let text = useRef();

  return (
    <div className={`button-text-box flex-row ${className}`}>
      <input className="input-text" type={'text'} placeholder={placeHolder} ref={text} />
      <button onClick={() => onClickBtn(text.current.value)}>{buttonText}</button>
    </div>
  );
};

//proptypes

ButtonTextBox.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClickBtn: PropTypes.func.isRequired
};

ButtonTextBox.defaultProps = {
  placeHolder: 'Enter Here',
  buttonText: 'Search',
  className: ''
};

export default ButtonTextBox;
