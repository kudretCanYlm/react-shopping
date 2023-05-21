import React, { useEffect } from 'react';
import IconButton from 'components/base/buttons/IconButton';
import { AiOutlineMenu } from 'react-icons/ai';
import SearchTextBox from 'components/base/textboxes/SearchTextBox';
import TextLink from 'components/base/links/TextLink';
import { connect } from 'react-redux';
import { TOGGLE_LEFT_NAV_BAR } from 'redux/actions/NavBarActions';
import UserCard from 'components/main/cards/navBarCards/UserCard';
import { GET_AUTHORIZED_USER_INFORMATION_MINI } from 'redux/actions/user/AuthorizedUserInformationMini';

const mapStateToProps = (state) => ({
  navBarReducer: state.NavBarReducer,
  userReducer: state.UserReducer
});

const mapDispatchToProps = (dispatch) => {
  return {
    toggleLeftNavBar: () => dispatch({ type: TOGGLE_LEFT_NAV_BAR }),
    GetAuthorizedUserInformationMini: () => dispatch(GET_AUTHORIZED_USER_INFORMATION_MINI())
  };
};

const NavBarTop = (props) => {
  const { toggleLeftNavBar, GetAuthorizedUserInformationMini, userReducer } = props;

  useEffect(() => {
    GetAuthorizedUserInformationMini();
  }, []);

  const onClick = () => toggleLeftNavBar();

  return (
    <div className="nav-bar-top flex-row">
      <div className="left flex-row flex-center-items">
        <IconButton text={'Menu'} onClick={onClick}>
          <AiOutlineMenu className={'white fontsize-dashboard'} />
        </IconButton>
        {/* will add to redux */}
        <SearchTextBox
          isWithParams={true}
          textChange={() => {}}
          placeHolder="Search Here"
          className="max-width-100"
        />
        <TextLink
          to={'/dashboard'}
          className={'white fontsize-dashboard-min link-margin-1-vertical'}>
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
      <div className="right">
        {(userReducer.isLoading || userReducer.isError) && userReducer.loaded != true ? (
          <UserCard loaded={false} />
        ) : (
          ''
        )}
        {userReducer.loaded ? (
          <UserCard
            user={{
              userName: userReducer.payload.Name + ' ' + userReducer.payload.Surname,
              mail: userReducer.payload.Email,
              imgUrl:
                'https://image.shutterstock.com/z/stock-photo-red-apple-fruit-isolated-on-white-background-1896616390.jpg'
            }}
          />
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBarTop);
