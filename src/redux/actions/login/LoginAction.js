import { Login } from 'api/login/login-api';

//types
const USER_LOGIN_INFO = 'USER_LOGIN_INFO';
const USER_LOGIN_STATE = 'USER_LOGIN_STATE';

//types functions
const userLoginBool = (isLogin) => {
  return {
    type: USER_LOGIN_STATE,
    isLogin
  };
};

const userLogin = (token) => {
  return {
    type: USER_LOGIN_INFO,
    token
  };
};

//actions

//get
//add as midllee ware
const GET_TOKEN_FROM_LOCAL = () => {
  return (dispatch) => {
    const token = JSON.parse(localStorage.getItem('token'));

    if (token.length < 5) {
      dispatch(userLoginBool(false));
    } else {
      dispatch(userLogin(token));
      dispatch(userLoginBool(true));
    }
  };
};

//post
const POST_LOGIN = (login) => {
  return (dispatch) => {
    dispatch(userLoginBool(false));

    Login(login)
      .then((response) => {
        localStorage.setItem('token', JSON.stringify(response.data));
        dispatch(userLogin(response.data));
        dispatch(userLoginBool(true));
      })
      .catch((err) => {
        localStorage.removeItem('token');
        dispatch(userLoginBool(false));
      });
  };
};

export { USER_LOGIN_INFO, USER_LOGIN_STATE, GET_TOKEN_FROM_LOCAL, POST_LOGIN };
