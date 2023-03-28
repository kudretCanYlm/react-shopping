import { USER_LOGIN_INFO, USER_LOGIN_STATE } from 'redux/actions/login/LoginAction';

const LoginReducer = (state = [], action) => {
  switch (action.type) {
    case USER_LOGIN_INFO:
      return {
        ...state,
        isLogin: action.isLogin
      };

    case USER_LOGIN_STATE:
      return {
        ...state,
        token: action.token
      };

    default:
      return state;
  }
};

export default LoginReducer;
