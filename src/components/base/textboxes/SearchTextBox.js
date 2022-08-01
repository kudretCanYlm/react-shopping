import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';
import { useRef } from 'react';
import '../../../styles/common/common.css';
import { useDispatch, useSelector, connect } from 'react-redux';

const SearchTextBox = ({
  placeHolder = 'Search here..',
  textChange = (t) => t,
  className = ''
}) => {
  let text = useRef();

  let isOpen = useSelector((state) => state.TextBoxReducer).isOpen;

  console.log(isOpen);

  return (
    <>
      <div
        className={`text-box-search flex-row ${className} ${
          isOpen ? 'open-text-box' : 'close-text-box'
        }`}
      >
        <BsSearch className="icon" />
        <input
          className="input-text"
          type={'text'}
          placeholder={placeHolder}
          onChange={(e) => {
            text.current = e.target.value;
            textChange(text.current);
          }}
        />
      </div>
    </>
  );
};

export default SearchTextBox;

//propTypes
SearchTextBox.propTypes = {
  placeHolder: PropTypes.string,
  textChange: PropTypes.func.isRequired,
  className: PropTypes.string
};
