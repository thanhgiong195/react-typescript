import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../../styles/custom.scss';

export function Home() {
  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    birthday: '',
    address: '',
    cardid: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const key = localStorage.getItem('keyAuth');

    const config = {
      headers: { Authorization: `Bearer ${key}` },
    };

    axios
      .post(
        `https://5e75b1629dff12001635417e.mockapi.io/FormData`,
        data,
        // config,
      )
      .then((res: any) => {
        console.log(res.data);
        alert('Send data success');
        setData({
          firstname: '',
          lastname: '',
          birthday: '',
          address: '',
          cardid: '',
        });
      })
      .catch(error => {
        throw error;
      });
  };

  return (
    <div className="form-data mt-4">
      <div className="todo-form">
        <h4>Form data info</h4>
        <form onSubmit={handleSubmit}>
          <div className="form-group text-left mt-2">
            <label htmlFor="exampleInputEmail1">
              First Name
              <input
                type="text"
                className="form-control"
                id="firstname"
                placeholder="First name"
                required
                value={data.firstname}
                onChange={event =>
                  setData({ ...data, firstname: event.target.value })
                }
              />
            </label>
          </div>
          <div className="form-group text-left mt-2">
            <label htmlFor="exampleInputEmail1">
              Last Name
              <input
                type="text"
                className="form-control"
                id="lastname"
                required
                placeholder="last name"
                value={data.lastname}
                onChange={event =>
                  setData({ ...data, lastname: event.target.value })
                }
              />
            </label>
          </div>
          <div className="form-group text-left mt-2">
            <label htmlFor="exampleInputEmail1">
              Birthday
              <input
                type="text"
                className="form-control"
                id="birthday"
                required
                placeholder="Birthday"
                value={data.birthday}
                onChange={event =>
                  setData({ ...data, birthday: event.target.value })
                }
              />
            </label>
          </div>
          <div className="form-group text-left mt-2">
            <label htmlFor="exampleInputEmail1">
              Address
              <input
                type="text"
                className="form-control"
                id="address"
                required
                placeholder="Address"
                value={data.address}
                onChange={event =>
                  setData({ ...data, address: event.target.value })
                }
              />
            </label>
          </div>
          <div className="form-group text-left mt-2">
            <label htmlFor="exampleInputEmail1">
              Card ID
              <input
                type="text"
                className="form-control"
                id="cardid"
                required
                placeholder="Card ID"
                value={data.cardid}
                onChange={event =>
                  setData({ ...data, cardid: event.target.value })
                }
              />
            </label>
          </div>
          <div className="button-common">
            <button type="submit" className="btn btn-primary text-center">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
