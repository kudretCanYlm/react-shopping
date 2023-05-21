import { combineReducers } from 'redux';
import NavBarReducer from './NavBarReducer';
import TextBoxReducer from './TextBoxReducer';
import ArticleReducer from './article/ArticleReducer';
import ArticleCommentReducer from './article/ArticleCommentReducer';
import ProjectReducer from './project/ProjectReducer';
import MemberReducer from './member/MemberReducer';
import LoginReducer from './login/LoginReducer';
import UserReducer from './user/UserReducer';

const Reducers = combineReducers({
  NavBarReducer,
  TextBoxReducer,
  ArticleReducer,
  ArticleCommentReducer,
  ProjectReducer,
  MemberReducer,
  LoginReducer,
  UserReducer
});

export default Reducers;
