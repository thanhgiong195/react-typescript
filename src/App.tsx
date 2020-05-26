import React from 'react';
import axios from 'axios'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/organism/header'

import { Home } from './components/pages/home'
import { login } from './components/pages/login'
import { signUp } from './components/pages/signUp'

import { SampleContext, useUpdateContext } from './useContext'

axios.defaults.baseURL = 'https://5e75b1629dff12001635417e.mockapi.io';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export function App() {
    return (
        <div>
            <SampleContext.Provider value={useUpdateContext()}>
                <Router>
                    <div className="App">
                        <Header />
                        <Switch>
                            <Route exact path="/login" component={login} />
                            <Route exact path="/signup" component={signUp} />
                            <Route exact path="/" component={Home} />
                        </Switch>
                    </div>
                </Router>
            </SampleContext.Provider>
        </div>
    );
}
