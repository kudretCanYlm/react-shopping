import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import LogoImg from 'components/base/img/LogoImg';
import IconLink from 'components/base/links/IconLink';

//icons
import { FiHome } from 'react-icons/fi';
import { GoProject } from 'react-icons/go';
import { BsPersonLinesFill, BsFillChatLeftTextFill, BsBuilding } from 'react-icons/bs';
import { AiOutlineMail, AiFillPhone, AiOutlineClose } from 'react-icons/ai';
import { BiTime } from 'react-icons/bi';
import Logo from 'assets/icon.svg';
import {
  toChatPage,
  toCompanyPage,
  toDashboardPage,
  toMemberPage,
  toProjectPage
} from 'utils/Redirects';
import { TOGGLE_LEFT_NAV_BAR } from 'redux/actions/NavBarActions';

const mapStateToProps = (state) => ({
  navBarReducer: state.NavBarReducer
});

const mapDispatchToProps = (dispatch) => {
  return {
    toggleLeftNavBar: () => dispatch({ type: TOGGLE_LEFT_NAV_BAR })
  };
};


const NavBarLeft = (props, { fontSize, color }) => {
  let selector = useSelector((state) => state.NavBarReducer);

  const { toggleLeftNavBar } = props;

  const onClick = () => toggleLeftNavBar();

  return (
    <div
      className={`nav-bar-left flex-column ${selector.isOpen ? 'open-nav-bar' : 'close-nav-bar'}`}>
      <div className='flex-column flex-center-items nav-bar-left-close-btn' onClick={onClick} >
        <AiOutlineClose />
      </div>
      <div className={'logo'}>
        <LogoImg imgUrl={Logo} className="title-big-margin-1" />
      </div>
      <div className={'links'}>
        <IconLink text={'Dashboard'} to={toDashboardPage()}>
          <FiHome fontSize={fontSize} color={color} />
        </IconLink>
        <IconLink text={'Our Projects'} to={toProjectPage()}>
          <GoProject fontSize={fontSize} color={color} />
        </IconLink>
        <IconLink text={'Members'} to={toMemberPage()}>
          <BsPersonLinesFill fontSize={fontSize} color={color} />
        </IconLink>
        <IconLink text={'Companies'} to={toCompanyPage()}>
          <BsBuilding fontSize={fontSize} color={color} />
        </IconLink>
        <IconLink text={'E-mails'} to="/mail">
          <AiOutlineMail fontSize={fontSize} color={color} />
        </IconLink>
        <IconLink text={'Chat Support'} to={toChatPage()}>
          <BsFillChatLeftTextFill fontSize={fontSize} color={color} />
        </IconLink>
        <IconLink text={'Time Table'} to="/time-table">
          <BiTime fontSize={fontSize} color={color} />
        </IconLink>
        <IconLink text={'Contacts'} to="contacts">
          <AiFillPhone fontSize={fontSize} color={color} />
        </IconLink>
      </div>
    </div>
  );
};

//propTypes
NavBarLeft.propTypes = {
  fontSize: PropTypes.number,
  color: PropTypes.string
};

//default props
NavBarLeft.defaultProps = {
  fontSize: 20,
  color: 'white'
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBarLeft);
