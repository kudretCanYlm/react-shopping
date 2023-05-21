import React, { useEffect } from 'react';
import { logOut } from 'utils/Auth';
import { FaCat } from 'react-icons/fa';

const LogOutPage = () => {
  useEffect(() => {
    setTimeout(() => logOut(), 3000);
  }, []);

  return (
    <div className="logout-page flex-column">
      <FaCat className="logout-icon" />
    </div>
  );
};

export default LogOutPage;
