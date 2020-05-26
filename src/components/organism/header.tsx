import React from "react";
import { NavLink } from "react-router-dom";

interface Props { }

const header = (props: Props) => {
    return (
        <div className="header">
            <nav className="nav justify-content-center">
                <NavLink exact className="nav-link" to="/">
                    Home
                </NavLink>
                <NavLink exact className="nav-link" to="/login">
                    Login
                </NavLink>
                <NavLink exact className="nav-link" to="/signup">
                    SignUp
                </NavLink>
            </nav>
        </div>
    );
};

export default header;