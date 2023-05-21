import { Login, SignUp } from 'api/login/login-api';

//types
//login
const USER_IS_LOGINING = 'USER_IS_LOGINING';
const USER_LOGGED = 'USER_LOGGED';
const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';
const USER_LOGOUT = 'USER_LOGOUT';

//signup
const GET_USER_TOKEN = 'GET_USER_TOKEN';
const USER_IS_SIGNUPPING = 'USER_IS_SIGNUPPING';
const USER_SIGNUPPED = 'USER_SIGNUPPED';
const USER_SIGNUP_ERROR = 'USER_SIGNUP_ERROR';

//types functions
//login
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

//signup

const userIsSignUpping = (isSignUpping) => {
  return {
    type: USER_IS_SIGNUPPING,
    isSignUpping
  };
};

const userSignUpError = (err) => {
  return {
    type: USER_SIGNUP_ERROR,
    errCode: err.response.status,
    errMessage: err.response.data,
    isError: true
  };
};

const userSignUpped = (isSignUpped) => {
  return {
    type: USER_SIGNUPPED,
    isSignUpped
  };
};

//actions
//login
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

    Login(login)
      .then((response) => {
        setItem('token', JSON.stringify(response.data)).then(() => {
          dispatch(userLogged(true));
          dispatch(userIsLogining(false));
        });
      })
      .catch((err) => {
        dispatch(userIsLogining(false));
        dispatch(userLoginError(err));
      });
  };
};

//post
const POST_SIGNUP = (signup) => {
  return (dispatch) => {
    dispatch(userIsSignUpping(true));

    console.log(signup);

    SignUp(signup)
      .then((response) => {
        setItem('token', JSON.stringify(response.data)).then(() => {
          dispatch(userSignUpped(true));
          dispatch(userIsSignUpping(false));
        });
      })
      .catch((err) => {
        dispatch(userIsSignUpping(false));
        dispatch(userSignUpError(err));
      });
  };
};

export {
  USER_IS_LOGINING,
  USER_LOGGED,
  USER_LOGIN_ERROR,
  USER_LOGOUT,
  USER_IS_SIGNUPPING,
  USER_SIGNUPPED,
  USER_SIGNUP_ERROR,
  POST_LOGIN,
  POST_SIGNUP
};

function setItem(key, value) {
  return Promise.resolve().then(function () {
    localStorage.setItem(key, value);
  });
}
