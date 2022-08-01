import NavBarReducer from './NavBarReducer';
import TextBoxReducer from './TextBoxReducer';
import { combineReducers } from 'redux';

const Reducers = combineReducers({
  NavBarReducer,
  TextBoxReducer
});

export default Reducers;
