import React from 'react';
import styled from 'styled-components';

import header_img from './header_login.png';
import { Formik } from 'formik';
import Input from '../../molecules/Input';

const WrapperLoginForm = styled.div`
  background-color: #181818;
  width: 500px;
  height: 100%;
  padding: 30px;

  .header_logo {
    background-image: url('${header_img}');
    height: 60px;
    background-repeat: no-repeat;
    background-size: 100%;
    width: 70%;
    margin: 0 auto;
  }

  .signInText {
    color: #edd700;
    font-size: 25.6px;
    font-weight: normal;
    text-transform: uppercase;
    margin-bottom: 12px;
    text-align: center;
  }
`;

const Button = styled.button`
  width: 100%;
  background-color: #484848;
  color: white;
  height: 40px;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

interface LoginFormProps {
  initialValues: {
    login: string;
    sublogin: string;
    password: string;
  };
}

const LoginForm: React.FC<LoginFormProps> = ({ initialValues }) => {
  return (
    <WrapperLoginForm>
      <div className="header_logo" />
      <h3 className="signInText">Sign In</h3>
      <Formik initialValues={initialValues} onSubmit={(values) => console.log(values)}>
        {(props: any) => {
          const {
            values,
            handleSubmit,
            handleChange,
            handleBlur,
            touched,
            errors: formikErrors
          } = props;

          return (
            <form onSubmit={handleSubmit}>
              <Input
                label="Login"
                name="login"
                placeholder="Login"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.login}
                type="text"
              />
              <Input
                label="Sublogin"
                name="Sublogin"
                placeholder="Sublogin"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.sublogin}
                type="text"
                optional={true}
              />
              <Input
                label="Password"
                name="password"
                placeholder="Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                type="password"
              />
              <Button onSubmit={handleSubmit}>Sign in</Button>
            </form>
          );
        }}
      </Formik>
    </WrapperLoginForm>
  );
};

export default LoginForm;
