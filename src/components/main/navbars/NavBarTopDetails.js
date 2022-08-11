import React from 'react';
import { RiHome2Line } from 'react-icons/ri';
import { AiTwotoneBell } from 'react-icons/ai';
import BorderIconLink from 'components/base/links/BorderIconLink';
import ButtonTextBox from 'components/base/textboxes/ButtonTextBox';
import UserCard from 'components/main/cards/navBarCards/UserCard';
import BorderIcon from 'components/base/icons/BorderIcon';

const NavBarTopDetails = () => {
  const iconSize = 25;

  const textBoxClick = (text) => {
    console.log(text);
  };

  const onClickUserCard = () => {
    console.log('clicked user card');
  };

  return (
    <nav className="nav-bar-top-details flex-row">
      <div className='left flex-row'>
        <BorderIconLink to={'/dashboard'} className="border-icon">
          <RiHome2Line fontSize={iconSize} className={'icon-color-2'} />
        </BorderIconLink>
      </div>
      <div className='center flex-row'>
        <ButtonTextBox
          onClickBtn={textBoxClick}
          buttonText="Search"
          placeHolder="Find your property"
          className="text-box"
        />
      </div>
      <div className='right flex-row'>
        <BorderIcon className="border-icon">
          <AiTwotoneBell fontSize={iconSize} className={'icon-color-1'} />
        </BorderIcon>
        <UserCard
          onClick={onClickUserCard}
          user={{
            userName: 'Kudret Can',
            role: 'Admin',
            imgUrl:
              'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg'
          }}
          className={'card'}
        />
      </div>
    </nav>
  );
};

export default NavBarTopDetails;
