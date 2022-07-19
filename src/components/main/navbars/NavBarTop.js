import React, { useCallback } from 'react';
import IconButton from '../../base/buttons/IconButton';
import { AiOutlineMenu } from 'react-icons/ai';
import SearchTextBox from '../../base/textboxes/SearchTextBox';
import TextLink from '../../base/links/TextLink';
import {  useDispatch, useSelector,connect } from 'react-redux';
import {
  TOGGLE_LEFT_NAV_BAR
} from '../../../redux/actions/NavBarActions';

const mapStateToProps = state => ({
  ...state.NavBarReducer
});

const NavBarTop = () => {

  const dispatch = useDispatch();

  const onClick = useCallback(() => dispatch({ type: TOGGLE_LEFT_NAV_BAR }), [dispatch]);

  return (
    <div className="nav-bar-top flex-row">
      <IconButton text={'Main'} onClick={onClick}>
        <AiOutlineMenu className={'white fontsize-dashboard'} />
      </IconButton>
      {/* will add to redux */}
      <SearchTextBox textChange={() => {}} placeHolder="Search Here" className="max-width-100" />
      <TextLink to={'/dashboard'} className={'white'}>
        Dashboard
      </TextLink>
      <TextLink to={'/'} className={'white'}>
        Test
      </TextLink>
    </div>
  );
};

export default connect(mapStateToProps)(NavBarTop);
