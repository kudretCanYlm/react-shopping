import {
  USER_IS_LOGINING,
  USER_IS_SIGNUPPING,
  USER_LOGGED,
  USER_LOGIN_ERROR,
  USER_LOGOUT,
  USER_SIGNUPPED,
  USER_SIGNUP_ERROR
} from 'redux/actions/login/LoginAction';

const defaultState = {
  isLogining: false,
  isLogged: false,
  errCode: null,
  errMessage: null,
  isError: false,
  isSignUpping: false,
  isSignUpped: false
};

const LoginReducer = (state = defaultState, action) => {
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

    case USER_IS_SIGNUPPING:
      return {
        ...state,
        isSignUpping: action.isSignUpping
      };

    case USER_SIGNUPPED:
      return {
        ...state,
        isSignUpped: action.isSignUpped
      };

    case USER_SIGNUP_ERROR:
      return {
        ...state,
        errCode: action.errCode,
        errMessage: action.errMessage,
        isError: action.isError
      };

    default:
      return state;
  }
};

export default LoginReducer;
