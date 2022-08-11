import NavBarTopDetails from 'components/main/navbars/NavBarTopDetails';
import React from 'react';

const DetailsLayout = ({ children }) => {
  return (
    <div className="details-layout flex-column">
      <NavBarTopDetails />
      {/* nav bar top */}
      {children}
    </div>
  );
};

//propTypes

export default DetailsLayout;
