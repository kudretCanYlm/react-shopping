import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import LogoImg from 'components/base/img/LogoImg';
import IconLink from 'components/base/links/IconLink';

//icons
import { FiHome } from 'react-icons/fi';
import { GoProject } from 'react-icons/go';
import { BsPersonLinesFill, BsFillChatLeftTextFill } from 'react-icons/bs';
import { AiOutlineMail, AiFillPhone } from 'react-icons/ai';
import { BiTime } from 'react-icons/bi';
import Logo from 'assets/icon.svg';

const NavBarLeft = (props, { fontSize, color }) => {
  let selector = useSelector((state) => state.NavBarReducer);

  return (
    <div
      className={`nav-bar-left flex-column ${selector.isOpen ? 'open-nav-bar' : 'close-nav-bar'}`}
    >
      <div className={'logo'}>
        <LogoImg imgUrl={Logo} className="title-big-margin-1" />
      </div>
      <div className={'links'}>
        <IconLink text={'Dashboard'} to="/dashboard">
          <FiHome fontSize={fontSize} color={color} />
        </IconLink>
        <IconLink text={'Our Projects'} to="/project">
          <GoProject fontSize={fontSize} color={color} />
        </IconLink>
        <IconLink text={'Members'} to="/member">
          <BsPersonLinesFill fontSize={fontSize} color={color} />
        </IconLink>
        <IconLink text={'E-mails'} to="/mail">
          <AiOutlineMail fontSize={fontSize} color={color} />
        </IconLink>
        <IconLink text={'Chat Support'} to="/chat">
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

export default NavBarLeft;
