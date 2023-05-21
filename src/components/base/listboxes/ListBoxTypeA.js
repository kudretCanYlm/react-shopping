import React, { memo, useRef } from 'react';
import PropTypes from 'prop-types';

const ListBoxTypeA = ({ list, name, onChangeSelect = (f) => f, className }) => {
  let selected = useRef();

  const takeSelected = () => {
    onChangeSelect(selected.current.value);
  };

  return (
    <select
      ref={selected}
      onChange={takeSelected}
      name={name}
      className={`list-box list-box-type-a ${className}`}>
      {list.map((option, key) => (
        <option key={key} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

//proptypes
ListBoxTypeA.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.any.isRequired,
      value: PropTypes.any.isRequired
    })
  ),
  name: PropTypes.string.isRequired,
  className: PropTypes.string
};

//default props
ListBoxTypeA.defaultProps = {
  list: [
    {
      name: 'empty',
      value: 'empty'
    }
  ],
  name: 'not named',
  className: ''
};

export default memo(ListBoxTypeA);
