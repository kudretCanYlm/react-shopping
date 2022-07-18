import PropTypes from 'prop-types';
import IconButton from '../../base/buttons/IconButton';
import { AiOutlineMenu } from 'react-icons/ai';
import SearchTextBox from '../../base/textboxes/SearchTextBox';
import TextLink from '../../base/links/TextLink';
import { useState } from 'react';

//menuclick reduxla sağlanacak
const NavBarTop = ({ MenuClick = (f) => f }) => {
  const [text, setText] = useState();

  const textChange = (txt) => {
    setText(txt);
    console.log(txt + ' ' + text);
  };

  return (
    <div className="nav-bar-top flex-row">
      <IconButton text={'Main'} onClick={MenuClick}>
        <AiOutlineMenu className={'white fontsize-dashboard'} />
      </IconButton>
      <SearchTextBox textChange={textChange} placeHolder="Search Here" className="max-width-100" />
      <TextLink to={'/dashboard'} className={'white'}>
        Dashboard
      </TextLink>
      <TextLink to={'/'} className={'white'}>
        Test
      </TextLink>
    </div>
  );
};

export default NavBarTop;

//propTypes
NavBarTop.propTypes = {
  MenuClick: PropTypes.func.isRequired
};
