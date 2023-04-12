import ClassicButton from 'components/base/buttons/ClassicButton';
import ThickMidTitle from 'components/base/headers/ThickMidTitle';
import InputTextBox from 'components/base/textboxes/InputTextBox';
import ContentText from 'components/base/texts/ContentText';
import { Form, Formik } from 'formik';
import React from 'react';
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai';
import * as Yup from 'yup';

const LoginForm = ({ submitForm = (values) => values, submitErrorMessage, isProcessing }) => {
  const loginSchema = Yup.object().shape({
    username: Yup.string()
      .min(5, 'username greater then 5 character')
      .max(50, 'username lesser then 50 character')
      .required('required'),
    password: Yup.string()
      .min(5, 'password greater then 5 character')
      .max(50, 'password lesser then 50 character')
      .required('required')
  });

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={loginSchema}
      onSubmit={(values) => {
        submitForm(JSON.stringify(values));
      }}
    >
      {({ errors, touched }) => (
        <Form className="login-form flex-column">
          <ThickMidTitle className="title-color-5 title-fontsize-4 title-margin-5">
            Login
          </ThickMidTitle>
          <ContentText className="purple">{submitErrorMessage}</ContentText>
          <InputTextBox
            className="link-margin-1-horizontal"
            placeholder={'Type your username'}
            name="username"
            title="Username"
            icon={<AiOutlineUser />}
          />
          {errors.username ? <ContentText className="purple">{errors.username}</ContentText> : null}
          <InputTextBox
            className="link-margin-1-horizontal"
            isPassword={true}
            placeholder={'Type your password'}
            name="password"
            title="Password"
            icon={<AiOutlineLock />}
          />
          {errors.password ? <ContentText className="purple">{errors.password}</ContentText> : null}
          <ClassicButton
            isSubmit
            className="full-width icon-margin-top-3"
            text={isProcessing == true ? 'Logining...' : 'Login'}
          />
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
