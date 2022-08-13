import React from 'react';
import NavBarLeft from 'components/main/navbars/NavBarLeft';
import NavBarTop from 'components/main/navbars/NavBarTop';
import PropTypes from 'prop-types';
import { NO_CONTENT_ERROR } from './common/common-props';

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

//protoTypes
DashboardLayout.propTypes = {
  children: PropTypes.object.isRequired
};

//default props
DashboardLayout.defaultProps = {
  children: NO_CONTENT_ERROR
};

export default DashboardLayout;
