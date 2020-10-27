import React from 'react';
import { Redirect } from 'react-router-dom';

export class Auth extends React.Component {
  isLogin = checkUserState();

  render() {
    return this.isLogin ? this.props.children : <Redirect to="/login" />;
  }
}

function checkUserState() {
  const isLogin = getUserState();

  return isLogin;
}

function getUserState() {
  const keyAuth = localStorage.getItem('keyAuth');
  return keyAuth;
}
