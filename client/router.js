//Libs
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// Components
import App from './app.js';
import Graph from './shared_components/graph.js';
import CreateClass from './components/create_class/CreateClass.js';

// Routes
const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/graph" component={Graph} />
    <Route path='/create_class' component={CreateClass} />
  </Router>
);
export default routes;