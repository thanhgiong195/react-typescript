import React, { useContext} from 'react'
import { SampleContext } from '../../userContext'

interface Props {

}

export function SignUp (props: Props) {
    const context = useContext(SampleContext);
    return (
        <div className="card col-12 login-card mt-4 hv-center">
            <div>
                <button type="button" onClick={() => context.updateData2('Change2')}>テスト</button>
                <p>{context.sample}</p>
            </div>
            <form>
                <div className="form-group text-left mt-2">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password"
                        className="form-control"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary text-center"
                >
                    Register
                </button>
            </form>
        </div>
    )
}
