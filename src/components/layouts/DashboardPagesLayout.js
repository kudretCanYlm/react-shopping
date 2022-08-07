import React from 'react';
import PropTypes from 'prop-types';
import { NO_CONTENT_ERROR } from './common/common-props';

const DashboardPagesLayout = ({ children }) => {
  return <div className="common-page">{children}</div>;
};

//propTypes
DashboardPagesLayout.propTypes = {
  children: PropTypes.object.isRequired
};

//default props
DashboardPagesLayout.defaultProps = {
  children: NO_CONTENT_ERROR
};

export default DashboardPagesLayout;
