import React from 'react';
import styled from 'styled-components';
import LoginForm from 'components/LoginForm/LoginForm';
import { LoginTypes } from 'types/LoginTypes';
import useMedia from 'utils/useMedia';
import { useHistory } from 'react-router-dom';

const WrapperLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${({ mobile }: { mobile: any }) => mobile ? 'calc(90vh - 70px)' : 'calc(70vh - 90px)'};
  margin-bottom: 30px;
  padding: 10px;
`;

const LoginPage = () => {
  const { mobile } = useMedia();
  const initialValues: LoginTypes = { login: '', sublogin: '', password: '' };
  const history = useHistory();

  const doLogin = ({login, sublogin, password}:{login: string, sublogin: string, password: string}) => {
      console.log(login, sublogin, password)
  };

  return (
    <WrapperLogin mobile={mobile}>
      <LoginForm initialValues={initialValues} onSubmit={doLogin}/>
    </WrapperLogin>
  );
};

export default LoginPage;
