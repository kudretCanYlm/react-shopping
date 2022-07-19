import React from 'react';
import { useState } from 'react';
import NavBarLeft from '../main/navbars/NavBarLeft';
import NavBarTop from '../main/navbars/NavBarTop';
import PropTypes from 'prop-types';

const DashboardLayout = ({ children }) => {
  
  return (
    <div className="dashboard-layout flex-row">
      <NavBarLeft />
      <div className="flex-column dashboard-layout-right">
        <NavBarTop />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;

//protoTypes
DashboardLayout.propTypes = {
  children: PropTypes.object.isRequired
};
