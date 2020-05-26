import React from 'react'

interface Props {

}

export function login(props: Props) {
    return (
        <div className="card col-12 login-card mt-4 hv-center">
            <form>
                <div className="form-group text-left mt-2">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary text-center"
                >
                    Login
                </button>
            </form>
        </div>
    )
}
