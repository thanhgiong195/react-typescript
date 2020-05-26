import React from 'react'
import '../../styles/common.css'

interface Props {

}

export function resetPass(props: Props) {
    return (
        <div className="card col-12 login-card mt-4 hv-center">
            <form>
                <div className="form-group text-left mt-2">
                    <label htmlFor="exampleInputEmail1">Old Password</label>
                    <input type="password"
                        className="form-control"
                        id="oldpass"
                        placeholder="Old Pass"
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">New Password</label>
                    <input type="password"
                        className="form-control"
                        id="newpass"
                        placeholder="New Password"
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">New Password Confirm</label>
                    <input type="password"
                        className="form-control"
                        id="newpassconfirm"
                        placeholder="New Password Confirm"
                    />
                </div>
                <div className='button-common'>
                    <button
                        type="submit"
                        className="btn btn-primary text-center"
                    >
                        Reset
                    </button>
                </div>
            </form>
        </div>
    )
}
