import React, { useState } from 'react';
import '../../styles/common.css';

interface Props {}

export type FormInterface = {
  email: string;
  password: string;
};

export function SignUp(props: Props) {
  const [isConfirm, setIsConfirm] = useState<boolean>(false);
  const [formData, updateFormData] = React.useState<FormInterface>({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleConfirm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsConfirm(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="card col-12 login-card mt-4 hv-center">
      {!isConfirm ? (
        <div>
          <h3>Form Sign up</h3>
          <form onSubmit={handleConfirm} id="FormData">
            <div className="form-group text-left mt-2">
              <label htmlFor="exampleInputEmail1">
                Email address
                <input type="email" className="form-control" id="email" name="email" placeholder="Email" required onChange={handleChange} />
              </label>
            </div>
            <div className="form-group text-left">
              <label htmlFor="exampleInputEmail1">
                Password
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="form-group text-left">
              <label htmlFor="exampleInputPassword1">
                Confirm Password
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  name="ConfirmPassword"
                  placeholder="Confirm Password"
                  required
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="button-common">
              <button type="submit" className="btn btn-primary text-center">
                Register
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <h3>Confirm data</h3>
          <form onSubmit={handleSubmit} id="FormDataConfirm">
            <div className="form-group text-left mt-2">
              <p>Email address: {formData.email}</p>
            </div>
            <div className="form-group text-left">
              <p>Password: *******</p>
            </div>
            <div className="button-common">
              <button type="submit" className="btn btn-primary text-center">
                Register
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
