//Libs
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// Components
import App from './app';

// Routes
const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
);
export default routes;