import { useState } from 'react';
import NavBarLeft from '../main/navbars/NavBarLeft';
import NavBarTop from '../main/navbars/NavBarTop';
import PropTypes from 'prop-types';

const DashboardLayout = ({ children }) => {
  //will change ,use the redux
  const [isOpen, setIsOpen] = useState(true);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dashboard-layout flex-row">
      <NavBarLeft isOpen={isOpen} />
      <div className="flex-column dashboard-layout-right">
        <NavBarTop MenuClick={toggleIsOpen} />
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
