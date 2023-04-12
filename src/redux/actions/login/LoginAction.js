import { Login } from 'api/login/login-api';

//types
const USER_IS_LOGINING = 'USER_IS_LOGINING';
const USER_LOGGED = 'USER_LOGGED';
const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';
const USER_LOGOUT = 'USER_LOGOUT';
const GET_USER_TOKEN = 'GET_USER_TOKEN';

//types functions

const userIsLogining = (isLogining) => {
  return {
    type: USER_IS_LOGINING,
    isLogining
  };
};

const userLoginError = (err) => {
  return {
    type: USER_LOGIN_ERROR,
    errCode: err.response.status,
    errMessage: err.response.data,
    isError: true
  };
};

const userLogged = (isLogged) => {
  return {
    type: USER_LOGGED,
    isLogged
  };
};

const userLogout = (isLogged) => {
  return {
    type: USER_LOGOUT,
    isLogged
  };
};

//actions

//get
const GET_TOKEN_FROM_LOCAL = () => {
  return (dispatch) => {
    const token = JSON.parse(localStorage.getItem('token'));

    if (token) {
    } else {
    }
  };
};

//post
const POST_LOGIN = (login) => {
  return (dispatch) => {
    dispatch(userIsLogining(true));
    console.log('gridi2');
    Login(login)
      .then((response) => {
        setItem('token', JSON.stringify(response.data)).then(() => {
          dispatch(userLogged(true));
          dispatch(userIsLogining(false));
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch(userIsLogining(false));
        dispatch(userLoginError(err));
      });
  };
};

export { USER_IS_LOGINING, USER_LOGGED, USER_LOGIN_ERROR, USER_LOGOUT, POST_LOGIN };

function setItem(key, value) {
  return Promise.resolve().then(function () {
    localStorage.setItem(key, value);
  });
}
