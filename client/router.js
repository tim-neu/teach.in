//Libs
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// Components
import App from './app.js';
import Graph from './shared_components/graph.js';
import CreateClass from './components/create_class/CreateClass.js';
import Signup from './components/signup/signup.js';
import Signin from './components/signin/signin.js';

// Routes
const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/graph" component={Graph} />
    <Route path="/signup" component={Signup} />
    <Route path="/signin" component={Signin} />
    <Route path='/create_class' component={CreateClass} />
  </Router>
);
export default routes;