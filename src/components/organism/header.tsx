import React, { useContext } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { css } from 'emotion';
import { SampleContext } from '../../userContext';
import { Button } from '../atoms/button';

export const Header = () => {
  const context = useContext(SampleContext);
  const key = localStorage.getItem('keyAuth');

  const logoutHandle = () => {
    localStorage.removeItem('userinfo');
    localStorage.removeItem('keyAuth');
    context.updateData('');
  };

  return (
    <div className="header">
      {key !== null ? (
        <nav className="nav justify-content-center">
          <NavLink exact className="nav-link" to="/">
            Home
          </NavLink>
          <Button
            text="Logout"
            onClickEvent={logoutHandle}
            buttonClass={buttonStyle}
          />
        </nav>
      ) : (
        <nav className="nav justify-content-center">
          <Redirect to="/login" />
          <NavLink exact className="nav-link" to="/login">
            Login
          </NavLink>
        </nav>
      )}
    </div>
  );
};

const buttonStyle = css(`
  height: 25px;
  border: none;
  color: #007bff;
  background-color: transparent;
  padding: 0.5rem 1rem;
  outline: none;

  &:focus {
    border: none;
    outline: none;
  }
`);
