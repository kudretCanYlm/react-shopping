import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import LoginForm from 'components/main/forms/LoginForm';
import { POST_LOGIN } from 'redux/actions/login/LoginAction';
const { useTitle } = require('hooks/page-hooks');

const mapStateToProps = (state) => ({
  loginReducer: state.LoginReducer
});

const mapDispatchToProps = (dispatch) => {
  return {
    login: (login) => dispatch(POST_LOGIN(login))
  };
};

const LoginPage = (props) => {
  useTitle('Login Page');

  const { loginReducer, login } = props;

  useEffect(() => {
    console.log(loginReducer);
    if (loginReducer?.isLogged == true) {
      location.reload();
    }
  }, [loginReducer]);

  return (
    <div className="login-page flex-row">
      <LoginForm
        submitErrorMessage={loginReducer?.errMessage ?? ''}
        isProcessing={loginReducer.isLogining}
        submitForm={login}
      />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
