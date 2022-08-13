import NavBarTopDetails from 'components/main/navbars/NavBarTopDetails';
import React from 'react';
import PropTypes from 'prop-types';
import { NO_CONTENT_ERROR } from './common/common-props';

const DetailsLayout = ({ children }) => {
  return (
    <div className="details-layout flex-column">
      <NavBarTopDetails />
      {children}
    </div>
  );
};

//propTypes
DetailsLayout.propTypes = {
  children: PropTypes.object.isRequired
};

//default props
DetailsLayout.defaultProps = {
  children: NO_CONTENT_ERROR
};

export default DetailsLayout;
