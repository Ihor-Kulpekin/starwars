import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../../styled-components/styled-components';
import LoginForm from '../../components/LoginForm/LoginForm';
import { LoginTypes } from "../../types/LoginTypes";
import useMedia from "../../utils/useMedia";

const WrapperLogin = styled(Wrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${({mobile}:{mobile: any})=> mobile?'calc(90vh - 70px)':'calc(70vh - 90px)'};
  margin-bottom: 30px;
  padding: 10px;
`;

const LoginPage = () => {
  const {mobile} = useMedia();
  const initialValues: LoginTypes = {login: '', sublogin: '', password: ''}
  return (
    <WrapperLogin mobile={mobile}>
      <LoginForm initialValues={initialValues}/>
    </WrapperLogin>
  );
};

export default LoginPage;
