import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from 'react-tabs';
import { EMPTY_ICON } from '../links/common/common-props';

const TabTypeB = ({ children, onClick, className }) => {
  return (
    <Tab onClick={onClick} className={`tab-type-b   ${className}`}>
      {children}
    </Tab>
  );
};

TabTypeB.propTypes = {
  children: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
};

TabTypeB.defaultProps = {
  children: EMPTY_ICON,
  className: ''
};

export default TabTypeB;
