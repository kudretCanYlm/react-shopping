import React from 'react';
import { useSelector } from 'react-redux';

const NavBarLeft = () => {
  let selector = useSelector((state) => state.NavBarReducer);

  return (
    <div className={`nav-bar-left ${selector.isOpen ? 'open-nav-bar' : 'close-nav-bar'}`}>
      test test
    </div>
  );
};

export default NavBarLeft;
