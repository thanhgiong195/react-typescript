import React from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header } from './components/organism/header';

import { Home } from './components/pages/home';
import { Auth } from './services/auth';
import { Login } from './components/pages/login';
import { SignUp } from './components/pages/signUp';
import { resetPass } from './components/pages/resetPass';

import { SampleContext, useUpdateContext } from './userContext';

axios.defaults.baseURL = 'https://5e75b1629dff12001635417e.mockapi.io';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export function App() {
  return (
    <div>
      <SampleContext.Provider value={useUpdateContext()}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/resetpass" component={resetPass} />
            <Auth>
              <Switch>
                <Route exact path="/" component={Home} />
              </Switch>
            </Auth>
          </Switch>
        </Router>
      </SampleContext.Provider>
    </div>
  );
}
