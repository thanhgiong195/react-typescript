import React, { useContext, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import axios from 'axios';
import '../../styles/common.css';

import { SampleContext } from '../../userContext';

interface Props extends RouteComponentProps {}

export function Login(props: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const context = useContext(SampleContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const loginData = {
      username,
      password,
    };

    axios
      .post(`/LoginData`, loginData)
      .then((res: any) => {
        localStorage.setItem('keyAuth', res.data.token);
        context.updateData(res.data.token);
        const userData = {
          id: res.data.id,
          username: res.data.username,
        };
        localStorage.setItem('userinfo', JSON.stringify(userData));
        props.history.push('/');
      })
      .catch(error => {
        throw error;
      });
  };

  useEffect(() => {
    const key = localStorage.getItem('keyAuth');
    if (key) {
      props.history.push('/');
    }
  }, []);

  return (
    <div className="card col-12 login-card mt-4 hv-center">
      <form onSubmit={handleSubmit}>
        <div className="form-group text-left mt-2">
          <label htmlFor="exampleInputEmail" className="w-100">
            Email
            <input
              type="text"
              className="form-control w-100"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Email"
              value={username}
              onChange={event => setUsername(event.target.value)}
            />
          </label>
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputPassword" className="w-100">
            Password
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              placeholder="Password"
              onChange={event => setPassword(event.target.value)}
            />
          </label>
        </div>
        <div className="button-common">
          <button type="submit" className="btn btn-primary text-center">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
