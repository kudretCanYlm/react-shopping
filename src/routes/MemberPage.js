import DashboardPagesLayout from 'components/layouts/DashBoardPagesLayout';
import React from 'react';
import { useDispatch } from 'react-redux';
import { CLOSE_NAV_BAR_TEXT_BOX, OPEN_NAV_BAR_TEXT_BOX } from 'redux/actions/TextBoxActions';

const MemberPage = () => {
  const dispatch = useDispatch();

  dispatch({ type: CLOSE_NAV_BAR_TEXT_BOX });

  return (
    <DashboardPagesLayout>
      <div className="">member page</div>
    </DashboardPagesLayout>
  );
};

export default MemberPage;
