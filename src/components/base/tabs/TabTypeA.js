import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from 'react-tabs';

const TabTypeA = ({ children, className }) => {
  return <Tab className={`tab-type-a ${className}`}>{children}</Tab>;
};

TabTypeA.tabsRole = 'Tab'; // Required field to use your custom Tab

TabTypeA.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string
};

TabTypeA.defaultProps = {
  children: 'Empty Tab',
  className: ''
};

export default TabTypeA;
