import React from 'react';
import { Login } from './Login';
import { useNavigate } from 'react-router-dom';
import { login, LoginModel } from './api/auth-api';

export const LoginLayout = () => {
  const navigator = useNavigate();

  const onSubmitLogin = (model: LoginModel) => {
    // login(model).then((response) => {
    //   if (response) {
    //     navigator('/');
    //   }
    // });
  };

  const onNavigateSignUp = () => {
    navigator('/auth/sign-up');
  };

//   return <Login onNavigate={onNavigateSignUp} onSubmit={onSubmitLogin} />;
  return <></>
};
