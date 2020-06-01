import React, { useContext } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { css } from 'emotion';
import { SampleContext } from '../../userContext';
import { Button } from '../atoms/button';

interface Props {}

export const Header = (props: Props) => {
  const context = useContext(SampleContext);

  const logoutHandle = () => {
    localStorage.setItem('keyAuth', '');
    context.updateData('');
  };

  return (
    <div className="header">
      {context.sample === '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918' ? (
        <nav className="nav justify-content-center">
          <NavLink exact className="nav-link" to="/">
            Home
          </NavLink>
          <Button text="Logout" onClickEvent={logoutHandle} buttonClass={buttonStyle} />
        </nav>
      ) : (
        <nav className="nav justify-content-center">
          <Redirect to="/login" />
          <NavLink exact className="nav-link" to="/login">
            Login
          </NavLink>
          <NavLink exact className="nav-link" to="/signup">
            SignUp
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
  &:focus {
    border: none;
  }
`);
