import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

const ButtonTextBox = ({
  placeHolder,
  isWithParams,
  buttonText,
  className,
  initAction = (f) => f,
  onClickBtn = (f) => f
}) => {
  let text = useRef();

  const [searchParams, setSearchParams] = useSearchParams();

  if (isWithParams) {
    useEffect(() => {
      text.current.value = searchParams.get('src') ?? '';
      initAction(text.current.value);
    }, []);
  }

  return (
    <div className={`button-text-box flex-row ${className}`}>
      <input
        className="input-text"
        type={'text'}
        placeholder={placeHolder}
        onKeyDown={(e) => {
          if (e.keyCode == 13) onClickBtn(text.current.value);
        }}
        onChange={() => {
          if (isWithParams) {
            if (text.current.value.length == 0) setSearchParams();
            else setSearchParams({ src: text.current.value });
          } else {
            setSearchParams({ src: text.current.value });
          }
        }}
        ref={text}
      />
      <button
        onClick={() => {
          onClickBtn(text.current.value);
        }}
      >
        {buttonText}
      </button>
    </div>
  );
};

//proptypes

ButtonTextBox.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  isWithParams: PropTypes.bool.isRequired,
  buttonText: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClickBtn: PropTypes.func.isRequired
};

ButtonTextBox.defaultProps = {
  placeHolder: 'Enter Here',
  isWithParams: false,
  buttonText: 'Search',
  className: ''
};

export default memo(ButtonTextBox);
