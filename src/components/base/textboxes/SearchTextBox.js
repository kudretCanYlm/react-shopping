import React from 'react';
import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';
import { useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const SearchTextBox = ({ placeHolder, isWithParams, textChange = (t) => t, className }) => {
  let text = useRef();

  let isOpen = useSelector((state) => state.TextBoxReducer).isOpen;
  const [searchParams, setSearchParams] = useSearchParams();

  if (isWithParams) {
    useEffect(() => {
      text.current.value = searchParams.get('src') ?? '';
    }, []);
  }

  return (
    <div
      className={`text-box-search flex-row ${className} ${
        isOpen ? 'open-text-box' : 'close-text-box'
      }`}>
      <BsSearch className="icon" />
      <input
        className="input-text"
        type={'text'}
        placeholder={placeHolder}
        onChange={() => {
          if (isWithParams) {
            if (text.current.value.length == 0) setSearchParams();
            else setSearchParams({ ['src']: text.current.value });
          }
          textChange(text.current.value);
        }}
        ref={text}
      />
    </div>
  );
};

//propTypes
SearchTextBox.propTypes = {
  placeHolder: PropTypes.string,
  textChange: PropTypes.func.isRequired,
  isWithParams: PropTypes.bool.isRequired,
  className: PropTypes.string
};

//default props
SearchTextBox.defaultProps = {
  placeHolder: 'Search here..',
  isWithParams: false,
  className: ''
};

export default SearchTextBox;
