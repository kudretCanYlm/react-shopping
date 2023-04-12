import BaseApiClass from 'api/utils/base-api';

const loginBaseUrl = '/auth';

//routes
const login = loginBaseUrl + '/login';

//post
const Login = async (params) => {
  const baseApiClass = new BaseApiClass();
  const status = await baseApiClass.BaseApi().post(login, params);
  return status;
};

export { Login };
