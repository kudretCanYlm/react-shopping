import ClassicButton from 'components/base/buttons/ClassicButton';
import InputTextBox from 'components/base/textboxes/InputTextBox';
import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { AiOutlineLock, AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';
import * as Yup from 'yup';
import ThickMidTitle from 'components/base/headers/ThickMidTitle';
import ContentText from 'components/base/texts/ContentText';
import { TabList, TabPanel, Tabs } from 'react-tabs';
import TabTypeB from 'components/base/tabs/TabTypeB';

const SignUpForm = ({ submitForm = (values) => values, submitErrorMessage, isProcessing }) => {
  const [tab, setTab] = useState(0);
  const [firstFormValues, setFirstFormValues] = useState({ name: '', surname: '', email: '' });

  const signUpSchemaFirst = Yup.object().shape({
    name: Yup.string()
      .min(1, 'name greater then 1 character')
      .max(50, 'name lesser then 50 character')
      .required('required'),
    surname: Yup.string()
      .min(1, 'surname greater then 1 character')
      .max(50, 'surname lesser then 50 character')
      .required('required'),
    email: Yup.string()
      .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'enter a valid email')
      .required('enter a valid email')
  });

  const signUpSchemaSecond = Yup.object().shape({
    username: Yup.string()
      .min(5, 'username greater then 5 character')
      .max(50, 'username lesser then 50 character')
      .required('required'),
    password: Yup.string()
      .min(5, 'password greater then 5 character')
      .max(50, 'password lesser then 50 character')
      .required('required')
  });

  const setBackTab = () => {
    setTab(tab - 1);
  };

  return (
    <Tabs selectedIndex={tab}>
      <TabList>
        {tab > 0 ? (
          <TabTypeB onClick={setBackTab}>
            <IoIosArrowBack fontSize={30} />
          </TabTypeB>
        ) : (
          ''
        )}
      </TabList>
      <TabPanel>
        <Formik
          initialValues={firstFormValues}
          validationSchema={signUpSchemaFirst}
          onSubmit={(values) => {
            setFirstFormValues(values);
            setTab(1);
          }}>
          {({ errors, touched }) => (
            <Form className="sign-up-form flex-column">
              <ThickMidTitle className="title-color-5 title-fontsize-4 title-margin-5">
                Sign Up
              </ThickMidTitle>
              <InputTextBox
                className="link-margin-1-horizontal"
                placeholder={'Type your name'}
                name="name"
                title="Name"
                icon={<AiOutlineUser />}
              />
              {errors.name ? <ContentText className="purple">{errors.name}</ContentText> : null}
              <InputTextBox
                className="link-margin-1-horizontal"
                placeholder={'Type your surname'}
                name="surname"
                title="Surname"
                icon={<AiOutlineUser />}
              />
              {errors.surname ? (
                <ContentText className="purple">{errors.surname}</ContentText>
              ) : null}
              <InputTextBox
                className="link-margin-1-horizontal"
                placeholder={'Type your email'}
                name="email"
                title="Email"
                icon={<AiOutlineMail />}
              />
              {errors.email ? <ContentText className="purple">{errors.email}</ContentText> : null}

              <ClassicButton isSubmit className="full-width icon-margin-top-3" text={'Next'} />
            </Form>
          )}
        </Formik>
      </TabPanel>

      <TabPanel>
        <Formik
          initialValues={{
            username: '',
            password: ''
          }}
          validationSchema={signUpSchemaSecond}
          onSubmit={(values) => {
            const combineValues = {
              ...firstFormValues,
              ...values
            };

            submitForm(JSON.stringify(combineValues));
          }}>
          {({ errors, touched }) => (
            <Form className="sign-up-form flex-column">
              <ContentText className="purple">{submitErrorMessage}</ContentText>
              {errors.email ? <ContentText className="purple">{errors.email}</ContentText> : null}
              <InputTextBox
                className="link-margin-1-horizontal"
                placeholder={'Type your username'}
                name="username"
                title="Username"
                icon={<AiOutlineUser />}
              />
              {errors.username ? (
                <ContentText className="purple">{errors.username}</ContentText>
              ) : null}
              <InputTextBox
                className="link-margin-1-horizontal"
                isPassword={true}
                placeholder={'Type your password'}
                name="password"
                title="Password"
                icon={<AiOutlineLock />}
              />
              {errors.password ? (
                <ContentText className="purple">{errors.password}</ContentText>
              ) : null}
              <ClassicButton
                isSubmit
                className="full-width icon-margin-top-3"
                text={isProcessing == true ? 'SignUpping...' : 'Sign Up'}
              />
            </Form>
          )}
        </Formik>
      </TabPanel>
    </Tabs>
  );
};

export default SignUpForm;
