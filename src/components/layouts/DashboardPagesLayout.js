import React from 'react';
import PropTypes from 'prop-types';

const DashboardPagesLayout = ({ children }) => {
  return <div className="common-page">{children}</div>;
};

export default DashboardPagesLayout;

//propTypes
DashboardPagesLayout.propTypes = {
  children: PropTypes.object.isRequired
};
