import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const NavBarLeft = ({ isOpen = true }) => {
  let [isOpenPage, setIsOpenPage] = useState(isOpen);
  useEffect(() => {
    setIsOpenPage(isOpen);
  }, [isOpen]);

  return (
    <div className={`nav-bar-left ${isOpenPage ? 'open-nav-bar' : 'close-nav-bar'}`}>test test</div>
  );
};

export default NavBarLeft;

//propTypes
NavBarLeft.propTypes = {
  isOpen: PropTypes.bool.isRequired
};
