import React from 'react';
import { Login } from './Login';
import { useNavigate } from 'react-router-dom';
import { AUTH_ENDPOINT, LoginModel } from '../api/auth-api';
import useClient from '@http';

export const LoginLayout = () => {
  const navigator = useNavigate();
  const [{ isCreating }, login] = useClient.post<any>(AUTH_ENDPOINT.login);

  const onSubmitLogin = (model: LoginModel) => {
     login(model).then((value)=>{
        navigator('/board')
     })
  };

  const onNavigateSignUp = () => {
    navigator('/auth/sign-up');
  };

  return <Login onNavigate={onNavigateSignUp} onSubmit={onSubmitLogin} loading={isCreating} />;
};
