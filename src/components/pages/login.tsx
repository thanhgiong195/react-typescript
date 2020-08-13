import React, { useContext } from 'react';
import { NavLink, RouteComponentProps } from 'react-router-dom';
import '../../styles/common.css';

import { SampleContext } from '../../userContext';

interface Props extends RouteComponentProps {}

export function Login(props: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('keyAuth', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918');
    context.updateData('8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918');
    props.history.push('/');
  };

  const context = useContext(SampleContext);

  return (
    <div className="card col-12 login-card mt-4 hv-center">
      <h3>Form here</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group text-left mt-2">
          <label htmlFor="exampleInputEmail1">
            Email
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" />
          </label>
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputPassword1">
            Password
            <input type="password" className="form-control" id="password" placeholder="Password" />
          </label>
        </div>
        <NavLink exact className="nav-link" to="/resetpass">
          Reset password
        </NavLink>
        <div className="button-common">
          <button type="submit" className="btn btn-primary text-center">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
