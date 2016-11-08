//Libs
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// Components
import App from './app.js';
import Graph from './shared_components/graph.js';
import homeNav from './shared_components/home_nav.js';

// Routes
const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    	<Route path="/graph" component={Graph} />
    </Route>
  </Router>
);
export default routes;