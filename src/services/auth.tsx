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
  const auth = '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918';
  const keyAuth = localStorage.getItem('keyAuth');
  return auth === keyAuth;
}
