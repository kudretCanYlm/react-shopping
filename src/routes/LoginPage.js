import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import LoginForm from 'components/main/forms/LoginForm';
import { POST_LOGIN, POST_SIGNUP } from 'redux/actions/login/LoginAction';
import { useTitle } from 'hooks/page-hooks';
import { useNavigate } from 'react-router-dom';
import { TabList, TabPanel, Tabs } from 'react-tabs';
import TabTypeA from 'components/base/tabs/TabTypeA';
import SignUpForm from 'components/main/forms/SignUpForm';

const mapStateToProps = (state) => ({
  loginReducer: state.LoginReducer
});

const mapDispatchToProps = (dispatch) => {
  return {
    login: (login) => dispatch(POST_LOGIN(login)),
    signUp: (signUp) => dispatch(POST_SIGNUP(signUp))
  };
};

const LoginPage = (props) => {
  useTitle('Login Page');

  const { loginReducer, login, signUp } = props;
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    navigate('/');

    if (loginReducer?.isLogged == true || loginReducer?.isSignUpped == true) {
      location.reload();
    }
  }, [loginReducer]);

  return (
    <div className="login-page flex-row">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <div className="login-page-panel">
          <TabList className="tab-list flex-row">
            <TabTypeA className={tabIndex == 0 ? 'bg-col-1-hover-1' : ''}>Login</TabTypeA>
            <TabTypeA className={tabIndex == 1 ? 'bg-col-1-hover-1' : ''}>Sign Up</TabTypeA>
          </TabList>
          <div className="login-page-tabs">
            <TabPanel>
              <LoginForm
                submitErrorMessage={loginReducer?.errMessage ?? ''}
                isProcessing={loginReducer.isLogining}
                submitForm={login}
              />
            </TabPanel>
            <TabPanel>
              <SignUpForm
                submitErrorMessage={loginReducer?.errMessage ?? ''}
                isProcessing={loginReducer.isSignUpping}
                submitForm={signUp}
              />
            </TabPanel>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
