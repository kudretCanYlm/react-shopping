import React from 'react';
import PropTypes from 'prop-types';
import { BsGraphUp, BsGraphDown } from 'react-icons/bs';

const GraphUpDownIcon = ({ isToUp, fontSize, className }) => {
  return (
    <div className={`graph-up-down-icon ${className}`}>
      {isToUp ? (
        <BsGraphUp className="bs-graph-icon icon-up" fontSize={fontSize} />
      ) : (
        <BsGraphDown className="bs-graph-icon icon-down" fontSize={fontSize} />
      )}
    </div>
  );
};

//prop-type
GraphUpDownIcon.propTypes = {
  isToUp: PropTypes.bool.isRequired,
  fontSize: PropTypes.number.isRequired,
  className: PropTypes.string
};

//default props
GraphUpDownIcon.defaultProps = {
  isToUp: false,
  fontSize: 40,
  className: ''
};

export default GraphUpDownIcon;
