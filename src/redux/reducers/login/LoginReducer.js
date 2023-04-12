import {
  USER_IS_LOGINING,
  USER_LOGGED,
  USER_LOGIN_ERROR,
  USER_LOGOUT
} from 'redux/actions/login/LoginAction';

const LoginReducer = (
  state = { isLogining: false, isLogged: false, errCode: null, errMessage: null, isError: false },
  action
) => {
  switch (action.type) {
    case USER_IS_LOGINING:
      return {
        ...state,
        isLogining: action.isLogining
      };

    case USER_LOGGED:
      return {
        ...state,
        isLogged: action.isLogged
      };

    case USER_LOGIN_ERROR:
      return {
        ...state,
        errCode: action.errCode,
        errMessage: action.errMessage,
        isError: action.isError
      };

    case USER_LOGOUT:
      return {
        ...state
      };

    default:
      return state;
  }
};

export default LoginReducer;
