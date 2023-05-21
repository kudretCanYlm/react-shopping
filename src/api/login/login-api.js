import BaseApiClass from 'api/utils/base-api';

const loginBaseUrl = '/auth';

//routes
const login = loginBaseUrl + '/login';
const signUp = loginBaseUrl + '/signUp';

//post
const Login = async (params) => {
  const baseApiClass = new BaseApiClass();
  const status = await baseApiClass.BaseApi().post(login, params);
  return status;
};

//post
const SignUp = async (params) => {
  const baseApiClass = new BaseApiClass();
  const status = await baseApiClass.BaseApi().post(signUp, params);
  return status;
};

export { Login, SignUp };
