import React, { useEffect } from 'react';
import styled from 'styled-components';
import LoginForm from '../../components/LoginForm/LoginForm';
import { LoginTypes } from '../../types/LoginTypes';
import useMedia from '../../utils/useMedia';
import { useDispatch, useSelector } from 'react-redux';
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
  const dispatch = useDispatch();
  const loading = useSelector((state: any) => state.auth.loading);
  const isLoggedIn = useSelector((state: any) => !!state.auth.sessionKey?.length);
  const history = useHistory();
  console.log(loading);

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/console');
    }
  }, [isLoggedIn]);

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
