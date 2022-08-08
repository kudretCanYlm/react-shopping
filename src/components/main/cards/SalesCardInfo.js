import React from 'react';
import PropTypes from 'prop-types';

const SalesCardInfo = ({ title, info, className }) => {
  return (
    <div className={`sales-card-info ${className}`}>
      <h1>{title}</h1>
      <span>{info}</span>
    </div>
  );
};

//propTypes
SalesCardInfo.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  className: PropTypes.string
};

//default props
SalesCardInfo.defaultProps = {
  title: 'Empty',
  info: 'Empty',
  className: ''
};

export default SalesCardInfo;
