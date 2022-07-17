import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';
import { useRef } from 'react';
import '../../../styles/common/common.css';

const SearchTextBox = ({
  placeHolder = 'Search here..',
  textChange = (t) => t,
  className = ''
}) => {
  let text = useRef();

  return (
    <>
      <div className={`text-box-search flex-row ${className}`}>
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
