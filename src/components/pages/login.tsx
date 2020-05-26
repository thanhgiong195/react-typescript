import React, { useContext, } from 'react'
import '../../styles/common.css'
import { SampleContext } from '../../userContext'

interface Props {

}

export function Login(props: Props) {
    const context = useContext(SampleContext);
    return (
        <div className="card col-12 login-card mt-4 hv-center">
            <div>
                <button type="button" onClick={() => context.updateData('Change')}>テスト</button>
                <p>{context.sample}</p>
            </div>
            <form>
                <div className="form-group text-left mt-2">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Email"
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
                <div className='button-common'>
                    <button
                        type="submit"
                        className="btn btn-primary text-center"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}
