import BaseApi from 'api/utils/base-api';

const loginBaseUrl = '/auth';

//routes
const login = loginBaseUrl + '/login';

//post
const Login = async (login) => {
  const status = await BaseApi.post(loginBaseUrl, {
    Username: login.Username,
    Password: login.Password
  });
  return status;
};

export { Login };
