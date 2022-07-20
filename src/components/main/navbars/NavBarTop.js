import React, { useCallback } from 'react';
import IconButton from '../../base/buttons/IconButton';
import { AiOutlineMenu } from 'react-icons/ai';
import SearchTextBox from '../../base/textboxes/SearchTextBox';
import TextLink from '../../base/links/TextLink';
import { useDispatch, useSelector, connect } from 'react-redux';
import { TOGGLE_LEFT_NAV_BAR } from '../../../redux/actions/NavBarActions';
import UserCard from '../cards/navBarCards/UserCard';

const mapStateToProps = (state) => ({
  ...state.NavBarReducer
});

const NavBarTop = () => {
  const dispatch = useDispatch();

  const onClick = useCallback(() => dispatch({ type: TOGGLE_LEFT_NAV_BAR }), [dispatch]);

  return (
    <div className="nav-bar-top flex-row">

      <div className="left flex-row flex-center-items">
        <IconButton text={'Menu'} onClick={onClick}>
          <AiOutlineMenu className={'white fontsize-dashboard'} />
        </IconButton>
        {/* will add to redux */}
        <SearchTextBox textChange={() => { }} placeHolder="Search Here" className="max-width-100" />
        <TextLink to={'/dashboard'} className={'white fontsize-dashboard-min link-margin-1-vertical'}>
          Dashboard
        </TextLink>
        <TextLink to={'/member'} className={'white fontsize-dashboard-min link-margin-1-vertical'}>
          Member
        </TextLink>
        <TextLink to={'/report'} className={'white fontsize-dashboard-min link-margin-1-vertical'}>
          Report
        </TextLink>
        <TextLink to={'/help'} className={'white fontsize-dashboard-min link-margin-1-vertical'}>
          Help
        </TextLink>
      </div>
      <div className='right'>
        <UserCard
          user={{
            userName: 'Kudret Can',
            role: 'Admin',
            imgUrl:
              'https://image.shutterstock.com/z/stock-photo-red-apple-fruit-isolated-on-white-background-1896616390.jpg'
          }}
        />
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(NavBarTop);
